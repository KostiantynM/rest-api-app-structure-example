const {
  usersDAO
} = require('../dao');

module.exports = {
  /**
  * 
  * @param options.firstName filter users list by first name 

  */
  listUser: async (options) => {
    const queryOptions = {};
    try {
      if (options.firstName) {
        queryOptions.firstName = options.firstName;
      }

      const users = await usersDAO.listUsers(queryOptions);

      var data = {
          "count": users.count,
          "results": users,
        };
  
      return data;  
    } catch (err) {
      console.log('failed to executre listUser', err);
      throw {
        userMessage: 'Failed to get users list'
      };
    }
    
  },

  /**
  * 
  * @param options.userId Id of user to get 

  */
  user: async (options) => {

    // Implement your business logic here...
    //
    // Return all 2xx and 4xx as follows:
    //
    // return {
    //   status: 'statusCode',
    //   data: 'response'
    // }

    // If an error happens during your business logic implementation,
    // you can throw it as follows:
    //
    // throw new Error('<Error message>'); // this will result in a 500

    var data = {
        "firstName": "<string>",
        "id": "<int64>",
        "tag": "<string>",
      },
      status = '200';

    return {
      status: status,
      data: data
    };  
  },
};
