const { Router } = require("express");
const Contact = require("../models/contact");
const router = Router();
const passport = require("passport");

router.post("/contact", async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;
    const contact = new Contact({ name, phone, email, message });
    await contact.save();
    res.status(201).json({ message: "Thanks Soon Answers ))" });
  } catch (e) {
    res.status(500).jsom({ message: "Something went wrong, please try again" });
  }
});

router.get(
  "/mycontacts",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const contacts = await Contact.find();
      res.status(200).json(contacts);
    } catch (e) {
      res
        .status(500)
        .json({ message: "Something went wrong, please try again" });
    }
  }
);

router.delete(
  "/contact/delete/:id",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      await Contact.remove({ _id: req.params.id });
      res.status(200).json({ message: "You Deleted The Message" });
    } catch (e) {
      res
        .status(500)
        .json({ message: "Something went wrong, please try again" });
    }
  }
);
module.exports = router;
