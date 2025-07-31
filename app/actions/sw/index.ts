'use server'
 
import { subData } from '@/data/subs.data'
import webPush from 'web-push'
 
webPush.setVapidDetails(
  'mailto:kautilya101001@gmail.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.NEXT_PUBLIC_VAPID_PRIVATE_KEY!
)
 
export async function subscribeUser(sub: PushSubscription) {
  console.log("sub", sub);
  subData.push(sub)
  console.log(subData);
  return { success: true }
}
