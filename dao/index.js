const {
    user
} = require('../models');


class UsersDAO {
    constructor(options) {
        this.modelUser = options.modelUser;
    }

    async listUsers (params = {}) {
        // db query
        // query builder
        // { comment: requestId }
        const users = await this.modelUser.find(params); // [<Mongoose DocumentObject>]
        console.log('users--->>>', users);
        return users.map(user => user.toObject());
    }

    async getUserById ({ userId }) {
        const user = await this.modelUser.findById(userId);

        return user ? user.toObject() : null;
    }
}


module.exports = {
    usersDAO: new UsersDAO({modelUser: user}),
}