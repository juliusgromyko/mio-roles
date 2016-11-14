# MIO Role Based Access Lib

Role-based access middleware for express.

It's just check for req.user.role fit one of the expected roles

# Quick Start

1) Just save user role at req.user.role

2) Add access([roles]) middleware with list of expected roles for protected routes

# Sample

const access = Require('mio-roles');

...

app.route('/hello').all(access('helloRole')).get(YourRouteLogic...);

app.route('/hello2').all(access(['helloRole2', 'admin'])).get(YourRouteLogic...);
