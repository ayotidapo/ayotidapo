import Notification from "../models/Notification";
const addNotification = async () => {
  try {
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
    return { notification, success: true };
    // return res
    //   .status(200)
    //   .json({ data, success: true, message: "message sent!" });
  } catch (e) {
    return { error: e?.message, success: false };
    // return res.status(500).json({ success: false, message: e.message });
  }
};

export default addNotification;
