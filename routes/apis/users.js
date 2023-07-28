import express from 'express'
import fs from 'fs'
import {checkAdmin} from '../../middlewares/user.middleware';

const router = express.Router();

const userDataPath  = './dev-data/users.json';

let userData = JSON.parse(fs.readFileSync(userDataPath, 'utf8'))

router.get('/', checkAdmin, (req, res) => {
    res.json(userData)
})

router.get('/:userId', (req, res) => {
    const {userId} = req.params;
    const userDetail = userData.find(user => user.id == userId)
    if(userDetail) {
        res.json(userDetail)
    } else {
        res.status(404).json({ message: 'User not found'})
    }
})

router.post('/', (req,res) => {
    const { name, email } = req.body;
    const newUser = { id: (userData.length + 1) + 1, name, email}
    userData.push(newUser)
    fs.writeFileSync(userDataPath, JSON.stringify(userData))
    res.json(newUser)
})

router.put('/:userId', (req, res) => {
    const { userId } = req.params
    const { username, email } = req.body
    const userIndex = userData.findIndex(user => user.id == userId)
    if (userIndex !== -1 ) {
        userData[userIndex].username = username;
        userData[userIndex].email = email;
        fs.writeFileSync(userDataPath, JSON.stringify(userData))
        res.json(userData[userIndex])
    } else {
        res.status(404).json({ message: 'User not found'})
    }
})

router.delete('/:userId', (req, res) => {
    const { userId } = req.params;
    userData = userData.filter(user => user.id !== userId)
    fs.writeFileSync(userDataPath, JSON.stringify(userData))
    res.json({ message: 'Delete user successfully'})
})

module.exports =  router;