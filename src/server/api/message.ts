import express from "express";

import { Message } from "../models";

const router = express.Router();

router.get("/", async (req, res) => {
  const messages = await Message.find({});

  return res.json({
    data: messages
  });
});

router.get("/:slug", async (req, res) => {
  const { slug } = req.params;

  const message = await Message.findOne({ slug });

  if (!!message) {
    return res.json({
      data: message
    });
  } else {
    return res.status(404).json({
      error: "Could not find message associated with provided slug",
      status: 404,
    });
  }
});

router.post("/new", async (req, res) => {
  const body = req.body;

  try {
    const newMessage = new Message(body);
    await newMessage.save();

    return res.json({
      data: newMessage
    });
  } catch (err) {
    return res.status(400).json({
      error: err,
      status: 400,
    })
  }
});

export default router;