exports.mid  = (req, res, next) => {
    res.locals.variavel = 'variavel local';
    console.log()
    console.log('Passei no middleware')
    console.log()
    next()
}

exports.checkCsrfError = (err, req, res, next) => {
    if( err && err.code === 'EBADCSRFTOKEN') {
        return res.render('404')
    }
}

exports.csrfMiddleware = (req, res,next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}