import connectDB from "../../util/db-util";
import mongoose from "mongoose";
// import addNotification from "../../util/add-notification";
import Notification from "../../models/Notification";

export default async function handler(req, res) {
  if (req.method === "POST") {
    try {
      await connectDB();
      const { email, name, subject, message } = req.body;
      const data = { email, name, subject, message };

      // const userEmail = Notification.findOne({ email });

      const notification = new Notification({
        email,
        name,
        subject,
        message,
      });
      await notification.save();
      mongoose.connection.close();
      return res
        .status(200)
        .json({ data, success: true, message: "message sent!" });
    } catch (e) {
      return res.status(500).json({ success: false, message: e.message });
    }
  }
}
