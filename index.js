const express = require('express');
const webpush = require('web-push');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//Set Static path
app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

const publicVapidKey = 'BAwRyF90oTA6Ep2qTkSYuJwrxWTvGwRI2MoNxQTZDx4lE7GFGZ2YJra_Rvfpj6MY3DcFZeAWeU4Y43ngNI-tvVw';
const privateVapidKey = 'XB9zqtnMc1h9KyopkKoJc0s6ruFkwRTIXSKXXtihSHA';

webpush.setVapidDetails('mailto:aws.jdelosreyes@gmail.com', publicVapidKey, privateVapidKey)

//Subscribe Route
app.post('/subscribe', (req, res) => {
  // Get pushSubscription object
  const subscription = req.body;

  // Send 201 - resource created
  res.status(201).json({})

  // Create Payload
  const payload = JSON.stringify({ title: 'Test Web Push'});


  //Pass object to sendNotification
  webpush.sendNotification(subscription, payload).catch(err => console.log(err));
});

const port = 5000;

app.listen(port, '192.168.1.15', () => console.log(`Server Port ${port}`));