require('../config/global_config')

const testResponse = async (body) => {
    try {

        let response = "Welcome to path Test"
        return [true, response]
    } catch (error) {
        return [false, error]

    }
}

module.exports = {
    testResponse
};