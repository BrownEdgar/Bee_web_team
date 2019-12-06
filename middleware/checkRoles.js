const { Errors } = require('../helpers/error')
const Error = new Errors();

const adminRoles = ['0', '1'];
class UserPermissions {
    isAdmin(req, res, next){
        if (!adminRoles.includes(req.user.role)) {
            return Error.serverError(res);
        }
        next()
    }
    
    isStaff(req, res, next){
        // ete usera nor stugel Id hamapatasxanum e te voch
        next()
    }
}

module.exports = {UserPermissions} 