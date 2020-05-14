import express from "express";

import { Message } from "../models";

const router = express.Router();

function generateSlug() {
  return (Math.random()*1000).toString(36).slice(3,8).toUpperCase()
}

router.get("/", async (req, res) => {
  const messages = await Message.find({
    isPublic: true,
  });

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
    let generatedSlug = generateSlug();
    let existingMessage = await Message.findOne({slug: generatedSlug});

    while(!!existingMessage) {
      generatedSlug = generateSlug();
      existingMessage = await Message.findOne({slug: generatedSlug});
    }

    const newMessage = new Message({...body, slug: generatedSlug});
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