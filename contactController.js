const Contact = require('./contactModel');

//CRUD Operations for Contacts

exports.index = (req, res) => {
    Contact.get((err, contacts) => {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                message: "Contact retrieved successfully",
                data: contacts
            })
        }
    })
};

exports.new = function (req, res) {
    let contact = new Contact();
    contact.name = req.body.name;
    contact.gender = req.body.gender;
    contact.email = req.body.email;
    contact.phone = req.body.phone;

    console.log(contact);

    contact.save(function (err) {
        if (err) {
            res.json(err);
        } else {
            res.json({
                message: 'New contact created!',
                data: contact
            });
        }
    });
}

exports.view = (req, res) => {
    Contact.findById(req.params.contact_id, (err, contact) => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                message: "Contact details loading",
                data: contact
            })
        }
    })
};

exports.update = (req, res) => {
    Contact.findById(req.params.contact_id, (err, contact) => {
        if (err) {
            res.send(err)
        } else {
            contact.gender = req.body.gender;
            contact.email = req.body.email;
            contact.phone = req.body.phone;

            contact.save((err) => {
                if (err) {
                    res.send(err);
                } else {
                    res.json({
                        message: "Contact information updated",
                        data: contact
                    })
                }
            })
        }
    })
};

exports.delete = (req, res) => {
    Contact.remove({ _id: req.params.contact_id }, (err, contact) => {
        if (err) {
            res.send(err)
        } else {
            res.json({
                status: "Success",
                message: "Contact deleted"
            })
        }
    })
};