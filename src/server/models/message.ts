import mongoose from "mongoose";

const messageSchema = new mongoose.Schema({
  senderName: String,
  senderEmail: String,
  graduateName: String,
  graduateSchool: String,
  graduateEmail: String,
  body: String,
  tagline: String,
  photos: [{
    type: mongoose.Schema.ObjectId, 
    ref: 'Photo' 
  }],
  slug: {
    type: String,
    unique: true
  },
  isPublic: Boolean,
  isFeatured: Boolean,
});

const messageModel = mongoose.model("Message", messageSchema);

export default messageModel;