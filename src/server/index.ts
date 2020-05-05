import express, { Request, Response } from "express";
import next from "next";
import { json } from "body-parser";
import enforce from "express-sslify";
import dotenv from "dotenv";

import MessageRouter from "./api/message";

dotenv.config();

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3000;

const server = express();
server.use(json());

// Enforce HTTPS in production
if (!dev && process.env.ENFORCE_HTTPS) {
  // trustProtoHeader must be true if deploying on Heroku
  server.use(enforce.HTTPS({ trustProtoHeader: true }));
}

// Set up API routes
server.use("/api/message", MessageRouter);

// Start server and serve Next.js app when applicable
(async () => {
  try {
    await app.prepare();
    
    server.get("*", (req: Request, res: Response) => {
      return handle(req, res);
    });
    
    server.listen(port, (err?: any) => {
      if (err) throw err;
      console.log(`=================================================================`);
      console.log(`🚀 Launching server on port ${port} - env ${process.env.NODE_ENV || 'dev'}`);
      console.log(`=================================================================`);
    });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})();