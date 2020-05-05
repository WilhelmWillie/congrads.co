import mongoose from "mongoose";

const photoSchema = new mongoose.Schema({
  message: {
    type: mongoose.Schema.ObjectId, 
    ref: 'Message' 
  },
  photoUrl: {
    type: String,
    required: true
  },
  photoCaption: {
    type: String,
    required: false
  }
});

const photoModel = mongoose.model("Photo", photoSchema);

export default photoModel;