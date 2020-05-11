import express from "express";
import AWS from "aws-sdk";

import { Message } from "../models";

const router = express.Router();

// TODO:
// - Limit to jpgs, pngs, and gifs
// - Max upload size is 5 MB
// - Resize images to max-width of 1024px

router.post("/photo", async (req : any, res) => {
  const user = req.user;
  if (req.files) {
    const file = req.files.file;
    const s3 = new AWS.S3({
      accessKeyId: process.env.S3_ACCESS_KEY,
      secretAccessKey: process.env.S3_SECRET
    });

    const params = {
      Bucket: "congrads-photos",
      Key: user.id,
      Body: file.data
    };

    s3.upload(params, function(err, data) {
      if (!err) {
        // models.HackerProfile.update(
        //   { resume: data.Location },
        //   {
        //     where: {
        //       userId: req.user.id
        //     }
        //   }
        // )
        //   .then(updatedProfile => {
        //     res.json({ hackerProfileUpdate: updatedProfile });
        //   })
        //   .catch(e => {
        //     res.status(500).json({ error: e });
        //   });
      } else {
        // res.json(500, { message: "Failed to upload Resume" });
      }
    });
  }
});

export default router;