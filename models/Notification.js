import mongoose from "mongoose";
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: [true, "User email required"],
    match: /.+\@.+\..+/,
  },
  subject: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: { type: Date, default: Date.now },
});

let notification;
try {
  notification = mongoose.model("notification");
} catch (error) {
  notification = mongoose.model("notification", NotificationSchema);
}

module.exports = notification;

// module.exports = mongoose.model("notification", NotificationSchema);
