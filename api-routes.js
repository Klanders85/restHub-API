const router = require('express').Router();
const contactController = require('./contactController');

router.get('/', (req, res) => {
    res.json({
        status: 'API is up and running...',
        message: 'Welcome to restHub crafted with love!'
    });
});


router.route('/contacts')
    .get(contactController.index)
    .post(contactController.new)

router.route('/contacts/:id')
    .get(contactController.view)
    .patch(contactController.update)
    .put(contactController.update)
    .delete(contactController.delete)

module.exports = router;