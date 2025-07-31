"use client";

import { urlBase64ToUint8Array } from '@/utils'
import React, { useEffect, useState } from 'react'
import { subscribeUser } from '../app/actions/sw'

export function PushNotificationManager() {
  const [isSupported, setIsSupported] = useState(false)

  useEffect(() => {
    const registerAndSubscribe = async () => {
      console.log('navigator' in window && 'serviceWorker' in navigator);
      if ('serviceWorker' in navigator && 'PushManager' in window) {
        setIsSupported(true);
        try{

          const registration = await navigator.serviceWorker.register('/service-worker.js');
          const permission = await Notification.requestPermission();
          if (permission !== 'granted') return;
          
          const existing = await registration.pushManager.getSubscription();
          if (!existing) {
            const subscription = await registration.pushManager.subscribe({
              userVisibleOnly: true,
              applicationServerKey: urlBase64ToUint8Array(process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!),
            });
            const response =  await subscribeUser(subscription)
            console.log(response);
          }
        }
        catch(e){
          console.log(e);
        }
      }
    };

    registerAndSubscribe();
  }, []);
 
 
  if (!isSupported) {
     console.log("isSupported false",'No support Found')
  }
 
  return null;
}
