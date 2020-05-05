import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  return res.json({
    message: "Public messages"
  })
});

router.get("/:slug", (req, res) => {
  return res.json({
    message: "Individual message"
  })
});

router.post("/new", (req, res) => {
  return res.json({
    message: "New message"
  })
});

export default router;