const qrc = require('qrcode');
qrc.toString('hello i am abhijit', function (err,url) {
    console.log(url);
})