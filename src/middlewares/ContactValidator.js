import errorHandler from "../helpers/errorHandler";

export default class ContactValidator {
    static checkFields(req, res, next) {
        const { fname, lname, email, phone } = req.body;
        if (!fname || !fname.trim()) {
            errorHandler.handleError("Invalid fname", 400, res);
        } 
        else if (!lname || !lname.trim()) {
            errorHandler.handleError("Invalid lname", 400, res);
        }
        else if (!email || !email.trim()) {
            errorHandler.handleError("Invalid email", 400, res);
        }
        else if (!phone || !phone.trim()) {
            errorHandler.handleError("Invalid phone", 400, res);
        }
        else {
            next();
        }
    }

    static checkParam(req, res, next) {
        const { id } = req.params;
        if (!Number(id)) {
            errorHandler.handleError("Invalid contact id parameter", 400, res);
        } else {
            next();
        }
    }
}