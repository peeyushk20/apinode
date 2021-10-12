
const Joi = require('joi');

export const login = Joi.object().keys({
    email: Joi.string().email({ minDomainSegments: 2 }).required().error(errors => {
        errors.forEach(err => {
            switch (err.code) {
                case "any.required":
                    err.message = err.local.label+" should not be empty!";
                    break;
                case "string.base":
                    err.message = err.local.label+"  must be a string"
                    break;
                case "string.email":
                    err.message = err.local.label+" must be a valid email"
                    break;
                default:
                    err.message = err.code+" error"
                    break;
            }
        });
        return errors;
    }),
    password: Joi.string().required().pattern(new RegExp('^[a-zA-Z0-9@$!#]{3,30}$')).error(errors => {
        errors.forEach(err => {
            switch (err.code) {
                case "any.required":
                    err.message = err.local.label+" should not be empty!";
                    break;
                case "string.pattern.base":
                    err.message = err.local.label+" contains restricted character";
                    break;
                case "string.base":
                    err.message = err.local.label+"  must be a string"
                    break;
                default:
                    err.message = err.code+" error"
                    break;
            }
        });
        return errors;
    })
});
