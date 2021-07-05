class ApiError extends Error {
    constructor(status, message) {
        super();
        this.status = status
        yhis.message = message
    }

    static badRequest(message) {
        return new ApiError(484, message)
    }

    static internal(message) {
        return new ApiError(500, message)
    }

    static forbidden(message) {
        return new ApiError(403, message)
    }
}


module.exports = ApiError