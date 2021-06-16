import server from './app';

var fs = require('fs');
var https = require('https');

var privateKey  = fs.readFileSync(__dirname+'/server.key', 'utf8');
var certificate = fs.readFileSync(__dirname+'/server.pem', 'utf8');

var credentials = {key: privateKey, cert: certificate};

var httpsServer = https.createServer(credentials, server);

httpsServer.listen(process.env.PORT || 3001, () => {
  console.log(`API listening at ${process.env.PORT || 3001}`); // eslint-disable-line no-console
});
