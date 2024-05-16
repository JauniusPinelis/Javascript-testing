const express = require('express');
const app = express();
const { auth } = require('express-oauth2-jwt-bearer');

const port = process.env.PORT || 3005;

const jwtCheck = auth({
    audience: 'https://bit-test-api',
    issuerBaseURL: 'https://dev-ufwztyo5gczynbxq.us.auth0.com/',
    tokenSigningAlg: 'RS256'
});

// // enforce on all endpoints
// app.use(jwtCheck);

app.get('/authorized', jwtCheck, function (req, res) {
    res.send({ message: 'Secured Resource' });
});

app.listen(port);

console.log('Running on port ', port);