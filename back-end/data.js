const { trim, min } = require('lodash')
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/exam')
.then(() => {
    console.log('connected to the database')
})
.catch(() => {
    console.log('failed to connect to the database')
})

const newSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    firstName: {
        type: String,
        required: true,
        trim: true
    },
    lastName: {
        type: String,
        required: true,
        trim: true
    },
    position: {
        type: String,
        required: true,
        trim: true
    },
    company: {
        type: String,
        required: true,
        trim: true
    },
    businessArena: { 
        type: String,
        required: true, 
        trim: true
    },
    employees: {
        type: String, 
        required: true,
        min: 1
    },
    streetNum: {
        type: String,
        required: true,
        trim: true
    },
    additionalInfo: {
        type: String,
        trim: true
    },
    zipCode: {
        type: String,
        required: true,
        trim: true
    },
    place: {
        type: String,
        required: true,
        trim: true
    },
    country: {
        type: String,
        required: true,
        trim: true
    },
    code: {
        type: String,
        required: true,
        trim: true
    },
    phoneNumber: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        trim: true
    }
});


const Collection = mongoose.model('collection', newSchema)

module.exports = Collection
