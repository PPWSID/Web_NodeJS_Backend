const testService = require('../service/index')

async function testResponse(req, res) {
    try {
        const test = await testService.testResponse();
        res.status(200).json({
            status: true,
            data : test[1]
        })
    } catch (error) {
        // return response.InternalServerError(res);
        res.status(400).json({
            status: false,
            message:error,
        })
    }
}

module.exports = { testResponse };
