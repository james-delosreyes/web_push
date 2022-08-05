const publicVapidKey = 'BAwRyF90oTA6Ep2qTkSYuJwrxWTvGwRI2MoNxQTZDx4lE7GFGZ2YJra_Rvfpj6MY3DcFZeAWeU4Y43ngNI-tvVw';

//Check Service Worker
if('serviceWorker' in navigator) { 
  send().catch(err => console.error(err));
}


// Register Service worker, Register Push, Send Push
async function send() { 
  //Register Service Worker
  const register = await navigator.serviceWorker.register('/serviceWorker.js', {
    scope: '/'
  });
  
  //Register Push
  const subscription = await register.pushManager.subscribe({
    userVisibleOnly: true,
    applicationServerKey: publicVapidKey
  })
  console.log(JSON.stringify(subscription))

  //Send Push Notification
  await fetch('/subscribe', {
    method: 'POST',
    body: JSON.stringify(subscription),
    headers: {
      'content-type': 'application/json'
    }
  });
}