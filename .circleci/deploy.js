var FtpDeploy = require('ftp-deploy');
var ftpDeploy = new FtpDeploy();

var config = {
    user: process.env.FTP_USERNAME,
    password: process.env.FTP_PASSWORD,
    host: process.env.FTP_HOST,
    port: process.env.FTP_PORT,
    localRoot: __dirname + "/../",
    remoteRoot: process.env.FTP_REMOTE_ROOT,
    exclude: [ '.git' ],
    include: ['*']
}

// use with promises
ftpDeploy.deploy(config)
    .then(res => console.log('finished:', res))
    .catch(err => console.log(err));
