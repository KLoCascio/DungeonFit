const { Failures } = require('../models');

const getAllFailures = async (req, res) => {
    try {
        const Failure = await Failures.find()
        res.json(Failure)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createFailures = async (req, res) => {
    try {
        const Failure = await new Failures(req.body)
        await Failure.save()
        return res.status(201).json({
            Failure
        })
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteFailures = async (req, res) => {
    try {
        const id = req.params.id
        const Failure = await Failures.findByIdAndDelete(id)
        if (Failure) {
            return res.status(200).send('Failure Deleted')
        }
        throw new Error("Failure not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const updateFailures = async (req, res) => {
    try {
        const id = req.params.id
        const Failure = await Failures.findByIdAndUpdate(id, req.body, { new: true })
        if (Failure) {
            return res.status(200).json(Failure)
        } 
    } catch (e) {
        return res.status(500).send(e.message)
    }
}



module.exports = {
    getAllFailures,
    createFailures,
    deleteFailures,
    updateFailures
}