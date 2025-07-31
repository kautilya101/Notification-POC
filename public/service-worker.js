self.addEventListener('push', (event) => {
  console.log('Push event received');
  
  if (!event.data) {
    console.warn('Push event has no data');
    return;
  }

  const data = event.data.json();
  console.log('Push data:', data);

  event.waitUntil(
    self.registration.showNotification(data.title, {
      body: data.body,
      icon: data.icon || '/icon.png',
    })
    .then(() => {
          sendDeliveryReportAction();
       }),
  );
});

const sendDeliveryReportAction = () => {
  console.log('Web push delivered.');
};

console.log('I am working')