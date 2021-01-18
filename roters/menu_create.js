const { Router } = require('express')
const MenuCraete = require('../models/menuCraete')
const upload = require('../midlleware/upload')
const fs = require('fs')
const router = Router()
router.post('/create',
    upload.single('file'),
    async (req, res) => {
        try {
            const file = req.file
            const { name, cost, p, } = req.body
            if (!file) {
                res.status(400).json({ message: 'Not files !!! select file !!!' })
            } else {
                const create = new MenuCraete({
                    name, cost, p, imageSrc: req.file && req.file.path,
                    //user: req.user.id
                })
                await create.save()
                res.status(201).json({ message: 'Menu create' })
            }
        } catch (e) {
            res.status(500)
                .json({ message: "Something went wrong, please try again" })
        }
    })

router.get('/allmenu',
    async (req, res) => {
        try {
            const allmenu = await MenuCraete.find()
            res.status(200).json(allmenu)
        } catch (e) {
            res.status(500)
                .json({ message: "Something went wrong, please try again" })
        }
    })

router.post('/delete',
    async (req, res) => {
        try {
            const { imageSrc, _id } = req.body
            if (!imageSrc || !_id) {
                res.status(300).json({ message: "Что то пошель не так Потвердите выбор" })
            }
            await MenuCraete.remove({
                _id: _id
            })
            const path = imageSrc.split('\\').join('/')
            fs.unlinkSync(path)
            res.status(200).json({ message: 'Menu deleted' })
        } catch (e) {
            res.status(500)
                .json({ message: "Something went wrong, please try again" })
        }
    })
module.exports = router