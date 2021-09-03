import mongoose from "mongoose";
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "User email required"],
    unique: true,
    match: /.+\@.+\..+/,
  },
  subject: {
    type: String,
    required: true,
  },
  messages: [
    {
      message: {
        type: String,
        required: true,
      },
      date: { type: Date, default: Date.now },
    },
  ],
  latestMessage: {
    message: {
      type: String,
      required: true,
    },
    date: { type: Date, default: Date.now },
  },
});

let message;
try {
  message = mongoose.model("message");
} catch (error) {
  message = mongoose.model("message", MessageSchema);
}

module.exports = message;
