
self.addEventListener('push', e => {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: 'Push Notification from WEBPUSH',
    icon: 'https://www.awsys-i.com/res/nav-icon-hover.png'
  })
});