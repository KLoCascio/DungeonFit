const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { User } = require('../models')

const registerUser = async (req, res) => {
    try {
        const { userName, password } = req.body
        const existingUser = await User.findOne({ userName: userName })
        if (existingUser) {
            return res.status(400).json({ error: 'Username is already taken' })
        }
        const hashedPassword = await bcrypt.hash(password, 10)

        // Create a new user
        const newUser = new User({
            userName,
            password: hashedPassword,
        });
        await newUser.save()

        // Respond with a success message or the created user details
        res.status(201).json({
            message: 'User registered successfully',
            user: {
                id: newUser._id,
                username: newUser.username,
            },
        });

    } catch (error) {
        console.error(error)
        res.status(500).json({ error: 'Internal Server Error' })
    }
}

const loginUser = async (req, res) => {
    try {
        const { userName, password } = req.body
        const user = await User.findOne({ userName })

        if (!user) {
            return res.status(401).json({ error: 'Invalid username or password' });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ error: 'Invalid username or password' })
        }

        // Create and sign the JWT token
        const token = jwt.sign({ userId: user._id, userName: user.userName }, 'your-secret-key', {
            expiresIn: '1h', // Time for life of token
        });

        res.status(200).json({
            message: 'Login successful',
            token,
            user: {
                id: user._id,
                username: user.userName,
            },
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}








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
    updateUser,
    registerUser,
    loginUser
}