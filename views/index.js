import express from 'express'
import path from 'path'

const router = express.Router()

router.get('/home', (req, res) => {
    res.render(path.join(__dirname, "templates/home.ejs"), {helloString: "Xin Chao Cac Ban RA!"})
})
module.exports = router;