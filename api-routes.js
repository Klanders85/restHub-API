const router = require('express').Router();
const bookReviewController = require('./bookReviewController');

router.get('/', (req, res) => {
    res.json({
        status: 'API is up and running...',
        message: 'Welcome to Bookshelf crafted with love!'
    });
});


router.route('/books')
    .get(bookReviewController.index)
    .post(bookReviewController.new)

router.route('/books/:id')
    .get(bookReviewController.view)
    .patch(bookReviewController.update)
    .put(bookReviewController.update)
    .delete(bookReviewController.delete)

module.exports = router;