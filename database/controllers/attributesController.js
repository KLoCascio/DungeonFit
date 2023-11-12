const { Attributes } = require('../models');

const getAllAttributes = async (req, res) => {
    try {
        const attributes = await Attributes.find()
        res.json(attributes)
    } catch (error) {
        return res.status(500).send(error.message);
    }
}

const createAttribute = async (req, res) => {
    try {
        const attribute = await new Attributes(req.body)
        await attribute.save()
        return res.status(201).json({
            Attribute
        })
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const deleteAttributes = async (req, res) => {
    try {
        const id = req.params.id
        const userAttributes = await Attributes.findByIdAndDelete(id)
        if (userAttributes) {
            return res.status(200).send('Attribute Deleted')
        }
        throw new Error("Comment not found")
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

const updateAttributes = async (req, res) => {
    try {
        const id = req.params.id
        const AttributesUpdate = await Attributes.findByIdAndUpdate(id, req.body, { new: true })
        if (AttributesUpdate) {
            return res.status(200).json(AttributesUpdate)
        }
    } catch (e) {
        return res.status(500).send(e.message)
    }
}

module.exports = {
    getAllAttributes,
    createAttribute,
    deleteAttributes,
    updateAttributes
}