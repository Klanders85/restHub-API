const router = require('express').Router();

router.get('/', (req, res) => {
    res.json({
        status: 'API is up and running...',
        message: 'Welcome to restHub crafted with love!'
    });
});

module.exports = router;