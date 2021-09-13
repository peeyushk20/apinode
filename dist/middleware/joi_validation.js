var middleware = function (schema, property) {
    return function (req, res, next) {
        var error = schema.validate(req.body).error;
        var valid = error == null;
        if (valid) {
            next();
        }
        else {
            var details = error.details;
            var message = details.map(function (i) { return i.message; }).join(',');
            console.log("error", message);
            res.status(422).json({ error: message });
        }
    };
};
module.exports = middleware;
