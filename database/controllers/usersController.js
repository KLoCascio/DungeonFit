const { User } = require('../models');

const getAllUsers = async (req, res) => {
    try {
        const Users = await User.find()
        res.json(Users)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createUser = async (req, res) => {
    try {
        const Users = await new User(req.body)
        await Users.save()
        return res.status(201).json({
            Users
        })
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteUser = async (req, res) => {
    try {
        const id = req.params.id
        const Users = await User.findByIdAndDelete(id)
        if (Users) {
            return res.status(200).send('User Deleted')
        }
        throw new Error("User not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const updateUser = async (req, res) => {
    try {
        const id = req.params.id
        const Users = await User.findByIdAndUpdate(id, req.body, { new: true })
        if (Users) {
            return res.status(200).json(Users)
        } 
    } catch (e) {
        return res.status(500).send(e.message)
    }
}



module.exports = {
    getAllUsers,
    createUser,
    deleteUser,
    updateUser
}