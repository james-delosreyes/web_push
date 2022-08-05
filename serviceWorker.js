
// self.addEventListener('push', e => {
//   const data = e.data.json();
//   self.registration.showNotification(data.title, {
//     body: 'Push Notification from WEBPUSH',
//     icon: 'https://www.awsys-i.com/res/nav-icon-hover.png'
//   })
// });


self.addEventListener('push', function(event) {
  var options = {
    body: 'Push Notification from WEBPUSH',
    icon: 'https://www.awsys-i.com/res/nav-icon-hover.png',
    vibrate: [100,50,100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: '2'
    },
    actions:[
      {action: 'explore', title: 'Explore this new World', icon: 'https://www.awsys-i.com/res/nav-icon-hover.png'}
    ]
  };
  event.waitUntil(
    self.registration.showNotification('Test Push', options)
  )
});