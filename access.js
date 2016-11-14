// Roles middleware
// Created for MIO server | www.MakeItOnce.net
// Author: Julius Gromyko | juliusgromyko@gmail.com
// Julius Gromyko (C) 2016
const _ = require('lodash');

// Check if user have specific role to access
// "*" stands for available to all and used as default value.
// Pass role or array of roles to limit access, for ex: "admin" or ["admin", "guest"]
function access(expectedRoles){
  return function(req, res, next){

    // Normalize roles and give access to all if not specified
    if(!expectedRoles){
      expectedRoles = ['*'];
    }else if(!Array.isArray(expectedRoles)){
      expectedRoles = [expectedRoles];
    }

    // Getting and normalizing user roles
    var userRoles = ['*'];
    if(req.user && req.user.role){
      userRoles = req.user.role;
      if(!Array.isArray(userRoles)){
        userRoles = [userRoles];
      }
      userRoles.push('*');
    }

    // IF User roles are any of inputed ROLES
    if(_.intersection(expectedRoles, userRoles).length > 0){
      return next();
    }

    // ELSE - no ACCESS
    return res.redirect('/error/401');
  };
}

module.exports = access;
