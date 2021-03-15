module.exports = () => ({
    code: {
        // Informational 1xx
        CONTINUE: 100,
        SWITCHING_PROTOCOLS: 101,

        // Successful 2xx
        OK: 200,
        CREATED: 201,
        ACCEPTED: 202,
        NON_AUTHORITATIVE_INFORMATION: 203,
        NO_CONTENT: 204,
        RESET_CONTENT: 205,

        // Redirection 3xx
        MULTIPLE_CHOICES: 300,
        MOVED_PERMANENTLY: 301,
        FOUND: 302,
        SEE_OTHER: 303,
        USE_PROXY: 305,
        UNUSED: 306,
        TEMPORARY_REDIRECT: 307,

        // Client Error 4xx
        BAD_REQUEST: 400,
        UNAUTHORIZED: 401,
        PAYMENT_REQUIRED: 402,
        FORBIDDEN: 403,
        NOT_FOUND: 404,
        METHOD_NOT_ALLOWED: 405,
        NOT_ACCEPTABLE: 406,
        PROXY_AUTHENTICATION_REQUIRED: 407,
        REQUEST_TIMEOUT: 408,
        CONFLICT: 409,
        GONE: 410,
        LENGTH_REQUIRED: 411,
        PRECONDITION_FAILED: 412,
        REQUEST_ENTITY_TOO_LARGE: 413,
        REQUEST_URI_TOO_LONG: 414,
        UNSUPPORTED_MEDIA_TYPE: 415,
        REQUESTED_RANGE_NOT_SATISFIABLE: 416,
        EXPECTATION_FAILED: 417,
        I_AM_A_TEAPOT: 418,
        MISDIRECTED_REQUEST: 421,
        UNPROCESSABLE_ENTITY: 422,
        LOCKED: 423,
        FAILED_DEPENDENCY: 424,
        UPGRADE_REQUIRED: 426,

        // Server Error 5xx
        INTERNAL_SERVER_ERROR: 500,
        NOT_IMPLEMENTED: 501,
        BAD_GATEWAY: 502,
        SERVICE_UNAVAILABLE: 503,
        GATEWAY_TIMEOUT: 504,
        NOT_SUPPORTED: 505
    },
    message: {
        // Informational 1xx
        CONTINUE: 'Continue',
        SWITCHING_PROTOCOLS: 'Switching Protocols',

        // Successful 2xx
        OK: 'Ok',
        CREATED: 'Created',
        ACCEPTED: 'Accepted',
        NON_AUTHORITATIVE_INFORMATION: 'Non-Authoritative Information',
        NO_CONTENT: 'No Content',
        RESET_CONTENT: 'Reset Content',

        // Redirection 3xx
        MULTIPLE_CHOICES: 'Multiple Choices',
        MOVED_PERMANENTLY: 'Moved Permanently',
        FOUND: 'Found',
        SEE_OTHER: 'See Other',
        USE_PROXY: 'Use Proxy',
        UNUSED: 'Unused',
        TEMPORARY_REDIRECT: 'Temporary Redirect',

        // 4×× Client Error
        BAD_REQUEST: 'Bad Request',
        UNAUTHORIZED: 'Unauthorized',
        PAYMENT_REQUIRED: 'Payment Required',
        FORBIDDEN: 'Forbidden',
        NOT_FOUND: 'Not Found',
        METHOD_NOT_ALLOWED: 'Method Not Allowed',
        NOT_ACCEPTABLE: 'Not Acceptable',
        PROXY_AUTHENTICATION_REQUIRED: 'Proxy Authentication Required',
        REQUEST_TIMEOUT: 'Request Timeout',
        CONFLICT: 'Conflict',
        GONE: 'Gone',
        LENGTH_REQUIRED: 'Length Required',
        PRECONDITION_FAILED: 'Precondition Failed',
        REQUEST_ENTITY_TOO_LARGE: 'Payload Too Large',
        REQUEST_URI_TOO_LONG: 'Request-URI Too Long',
        UNSUPPORTED_MEDIA_TYPE: 'Unsupported Media Type',
        REQUESTED_RANGE_NOT_SATISFIABLE: 'Requested Range Not Satisfiable',
        EXPECTATION_FAILED: 'Expectation Failed',
        I_AM_A_TEAPOT: 'Im a teapot',
        MISDIRECTED_REQUEST: 'Misdirected Request',
        UNPROCESSABLE_ENTITY: 'Unprocessable Entity',
        LOCKED: 'Locked',
        FAILED_DEPENDENCY: 'Failed Dependency',
        UPGRADE_REQUIRED: 'Upgrade Required',

        // Server Error 5xx
        INTERNAL_SERVER_ERROR: 'Internal Server Error',
        NOT_IMPLEMENTED: 'Not Implemented',
        BAD_GATEWAY: 'Bad Gateway',
        SERVICE_UNAVAILABLE: 'Service Unavailable',
        GATEWAY_TIMEOUT: 'Gateway Timeout',
        NOT_SUPPORTED: 'HTTP Version Not Supported'
    }
});
