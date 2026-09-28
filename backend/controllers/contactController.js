const Contact = require("../models/Contact");

const sendMessage = async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    const contact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message sent successfully",
      data: contact,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to send message",
      error: error.message,
    });
  }
};

const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({
      createdAt: -1,
    });

    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch messages",
    });
  }
};

module.exports = {
  sendMessage,
  getMessages,
};