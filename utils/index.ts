export function urlBase64ToUint8Array(base64String: string): Uint8Array {
  // Pad the base64 string if necessary
  const padding = '='.repeat((4 - (base64String.length % 4)) % 4);
  const base64 = (base64String + padding)
    .replace(/-/g, '+') // Replace '-' with '+'
    .replace(/_/g, '/'); // Replace '_' with '/'

  const rawData = atob(base64); // Decode base64 to binary string
  const outputArray = new Uint8Array(rawData.length);

  for (let i = 0; i < rawData.length; ++i) {
    outputArray[i] = rawData.charCodeAt(i);
  }

  return outputArray;
}