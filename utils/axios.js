const { default: axios } = require('axios');


const post_v1 = async (url, body) => {
    return axios.post(url, body)
        .then(function (response) {
            return [200, response.data]
        })
        .catch(function (error) {
            return [400, error]
        });
}

const post_v2 = async (url, body, headers, headersJson) => {
    if (headers) {
        axiosHeaders = {
            'headers': {
                'Authorization': headers
            },
            'maxContentLength': Infinity,
            'maxBodyLength': Infinity
        }
    } else {
        axiosHeaders = headersJson
    }
    return axios.post(url, body, axiosHeaders)
        .then(function (response) {
            return [200, response.data]
        })
        .catch(function (error) {
            return [400, error]
        });
}

const post_v3 = async (url, body, headers, headersJson) => {
    if (headers) {
        axiosHeaders = {
            'headers': {
                'Authorization': headers,
                ...body.getHeaders()
            },
            'maxContentLength': Infinity,
            'maxBodyLength': Infinity
        }
    } else {
        axiosHeaders = headersJson
    }
    return axios.post(url, body, axiosHeaders)
        .then(function (response) {
            return [200, response.data]
        })
        .catch(function (error) {
            return [400, error]
        });
}

const post_v4 = async (url, body, headers) => {

    if (headers) {
        axiosHeaders = {
            'headers': headers
        }
    }
    return axios.post(url, body, axiosHeaders)
        .then(function (response) {
            return [200, response.data]
        })
        .catch(function (error) {
            return [400, error]
        });
}

const post_v5 = async (url, body, headers) => {
    // ไม่ต้องซ้อน headers
    return axios
        .post(url, body, {
            headers
        })
        .then(function (response) {
            return [200, response.data];
        })
        .catch(function (error) {
            return [400, error];
        });
};

const get_v1 = async (url) => {
    return axios.get(url)
        .then(function (response) {
            return [200, response.data]
        })
        .catch(function (error) {
            return [400, error]
        });
}

const get_v2 = async (url, headers, custom_headers) => {
    var send_header = {
        'headers': {
            'Authorization': headers
        }
    }
    if (custom_headers) {
        send_header = custom_headers
    }
    return axios.get(url, send_header)
        .then(function (response) {
            return [200, response.data]
        })
        .catch(function (error) {
            return [400, error]
        });
}


const get_v3 = async (url, headers, infoAccess) => {

    let send_header = {
        'headers': {
            'Content-Type': 'application/json',
            'Authorization': `${headers}`,
            'Client-Id': infoAccess.clientId,
            'Secret-Key': infoAccess.secretKey
        }
    }

    return axios.get(url, send_header)
        .then(function (response) {
            return [200, response.data]
        })
        .catch(function (error) {
            return [400, error]
        });
}

module.exports = {
    post_v1,
    post_v2,
    post_v3,
    post_v4,
    post_v5,
    get_v1,
    get_v2,
    get_v3
}