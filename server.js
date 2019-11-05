const express = require('express');
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');
var checkScopes = require('express-jwt-authz');

require('dotenv').config();

var jwtCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://skillium.auth0.com/.well-known/jwks.json'
  }),
  audience: 'http://localhost:3001',
  issuer: 'https://skillium.auth0.com/',
  algorithms: ['RS256']
});

const app = express();

app.get('/public', (req, res) => {
  res.json({
    message: 'json response'
  });
});

app.get('/private', jwtCheck, (req, res) =>
  res.json({ message: 'private route accessed by jwt' })
);

app.get('/courses', jwtCheck, checkScopes(['read:courses']), (req, res) =>
  res.json({
    courses: [
      { id: 1, title: 'professional react apps' },
      { id: 2, title: 'react and redux' }
    ]
  })
);

function checkRole(role) {
  return function(req, res, next) {
    const assignedRoles = req.user['http://localhost:3000/roles'];
    if (Array.isArray(assignedRoles) && assignedRoles.includes(role)) {
      return next();
    } else {
      return res.status(401).send('Insufficent role');
    }
  };
}

app.get('/private', jwtCheck, checkRole('admin'), (req, res) =>
  res.json({ message: 'private route accessed by jwt' })
);

app.listen(3001, () => {
  console.log('listening on port 3001');
});
