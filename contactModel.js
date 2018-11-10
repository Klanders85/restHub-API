const mongoose = require('mongoose');

let contactSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    gender: String,
    phone: String,
    create_date: {
        type: Date,
        default: Date.now()
    }
});

let Contact = module.exports = mongoose.model('Contact', contactSchema);

module.exports.get = (callback, limit) => {
    Contact.find(callback).limit(limit);
};