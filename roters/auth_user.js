const {Router} = require('express')

const router = Router()

router.post('/register',
async (req, res)=>{
await console.log(req.body)
res.status(201).json({message: 'User создан'})
})

module.exports = router