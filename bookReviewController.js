const Book = require('./bookModel');

//CRUD Operations for Book reviews

exports.index = (req, res) => {
    Book.get((err, books) => {
        if (err) {
            res.json({
                status: "Error",
                message: err
            });
        } else {
            res.json({
                status: "Success",
                message: "Book reviews retrieved successfully",
                data: books
            })
        }
    })
};

exports.new = function (req, res) {
    let book = new Book();
    console.log(book.req);
    book.title = req.body.title;
    book.author = req.body.author;
    book.picture = req.body.picture;
    book.description = req.body.description;
    book.publishedDate = req.body.publishedDate;
    book.review = req.body.review;

    console.log(book);

    book.save(function (err) {
        if (err) {
            res.json(err);
        } else {
            res.json({
                message: 'New book review created!',
                data: book
            });
        }
    });
}

exports.view = (req, res) => {
    Book.findById(req.params.book_id, (err, book) => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                message: "book details loading",
                data: book
            })
        }
    })
};

exports.update = (req, res) => {
    Book.findById(req.params.book, (err, book) => {
        if (err) {
            res.send(err)
        } else {
            book.title = req.body.title;
            book.author = req.body.author;
            book.picture = req.body.picture;
            book.description = req.body.description;
            book.publishedDate = req.body.publishedDate;
            book.review = req.body.review;

            book.save((err) => {
                if (err) {
                    res.send(err);
                } else {
                    res.json({
                        message: "book information updated",
                        data: book
                    })
                }
            })
        }
    })
};

exports.delete = (req, res) => {
    console.log(req.body.id);
    Book.findByIdAndRemove(req.params.id, (err) => {
        if (err) {
            res.send(err)
        } else {
            res.json({
                status: "Success",
                message: "Successfully delete book review"
            })
        }
    })
};