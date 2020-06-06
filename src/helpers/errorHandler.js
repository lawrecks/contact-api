export default class Error {
    static handleError (error, statusCode, response) {
        return response.status(statusCode).json({
            success : false,
            error
        });
    }
    
}