const users = require('../services/users');

const getUsersList = async (req, res, next) => {
    let options = {
        "firstName": req.query.firstName,
    };


    try {
        const result = await users.listUser(options);
        res.status(200).send(result);
    }
    catch (err) {
        return res.status(500).send({
            error: err.userMessage || 'Something went wrong.'
        });
    }
}

const getUserById = async (req, res, next) => {
    const {
        params: {
            userId
        }
    } = req;

    let options = {
        "userId": req.params.userId,
    };


    try {
        const result = await users.user(options);
        res.status(result.status || 200).send(result.data);
    }
    catch (err) {
        return res.status(500).send({
            error: err || 'Something went wrong.'
        });
    }
}

module.exports = {
    getUsersList,
    getUserById,
}
