
var MailListener = require("mail-listener2");
var lighter = require('./lighter');


var mailListener = new MailListener({
    username: "",
    password: "", // works for me: https://accounts.google.com/b/0/IssuedAuthSubTokens?hide_authsub=1
    host: "imap.gmail.com",
    port: 993, // imap port
    tls: true,
    fetchUnreadOnStart: true //,
});

mailListener.on("server:connected", function(){
    console.log("imapConnected");
});

mailListener.on("server:disconnected", function(){
    console.log("imapDisconnected");
});

mailListener.on("mail", function(mail) {
    lighter.lightThisBitchUp();

});

mailListener.start(); // start listening

setTimeout(function () {
    mailListener.stop(); // stop listening
}, 60*1000);
