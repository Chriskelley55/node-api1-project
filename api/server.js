// BUILD YOUR SERVER HERE
const express = require('express');
const server = express();
// module.exports = {}; // EXPORT YOUR SERVER instead of {}
const Model = require('./users/model')
server.use(express.json());

server.post('/api/users', async (req, res) => {
    try {
        const { name, bio } = req.body
        const newUser = await Model.insert({name, bio})
        if(!name || !bio) {
            res.status(400).json({ message: "Please provide name and bio for the user" })
        } else {
            res.status(201).json(newUser)
        }
    } catch(err) {
        res.status(500).json({ message: "There was an error while saving the user to the database" })
    }
})
module.exports = server;