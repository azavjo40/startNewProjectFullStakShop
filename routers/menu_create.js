//@ts-check
const { Router } = require("express");
const MenuCraete = require("../models/menuCraete");
const upload = require("../midlleware/upload");
const fs = require("fs");
const router = Router();
const passport = require("passport");
router.post(
  "/create",
  passport.authenticate("jwt", { session: false }),
  upload.single("file"),
  async (req, res) => {
    try {
      const file = req.file;
      const { name, cost, p, ifKebab } = req.body;
      if (!file) {
        res.status(400).json({ message: "Not files !!! select file !!!" });
      } else {
        const create = new MenuCraete({
          ifKebab,
          name,
          cost,
          p,
          imageSrc: req.file ? req.file.path : "",
        });
        await create.save();
        res.status(201).json({ message: "Menu create" });
      }
    } catch (e) {
      res
        .status(500)
        .json({ message: "Something went wrong, please try again" });
    }
  }
);

router.get("/allmenu", async (req, res) => {
  try {
    const allmenu = await MenuCraete.find();
    res.status(200).json(allmenu);
  } catch (e) {
    res.status(500).json({ message: "Something went wrong, please try again" });
  }
});

router.post(
  "/delete",
  passport.authenticate("jwt", { session: false }),
  async (req, res) => {
    try {
      const { imageSrc, _id } = req.body;
      if (!imageSrc || !_id) {
        res
          .status(300)
          .json({ message: "Something went wrong, please try again" });
      }
      await MenuCraete.remove({
        _id: _id,
      });
      const path = imageSrc.split("\\").join("/");
      fs.unlinkSync(path);
      res.status(200).json({ message: "Menu deleted" });
    } catch (e) {
      res
        .status(500)
        .json({ message: "Something went wrong, please try again" });
    }
  }
);
module.exports = router;
