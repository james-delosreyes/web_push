var push = require("web-push");

let vapidKeys = {
  publicVapidKey:"BAwRyF90oTA6Ep2qTkSYuJwrxWTvGwRI2MoNxQTZDx4lE7GFGZ2YJra_Rvfpj6MY3DcFZeAWeU4Y43ngNI-tvVw",
  privateVapidKey: "XB9zqtnMc1h9KyopkKoJc0s6ruFkwRTIXSKXXtihSHA",
};

push.setVapidDetails('mailto:aws.jdelosreyes@gmail.com', publicVapidKey, privateVapidKey)

//List of EndPoints TODO where to store??
let subscriptions = {};

push.sendNotification(subscriptions, "test web push")