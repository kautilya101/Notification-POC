'use server'
 
import { subData } from '@/data/subs.data'
import { redis } from '@/lib/redis';
import webPush from 'web-push'
 
webPush.setVapidDetails(
  'mailto:kautilya101001@gmail.com',
  process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY!,
  process.env.NEXT_PUBLIC_VAPID_PRIVATE_KEY!
)
 
export async function subscribeUser(sub: PushSubscription, currentUser: string) {
  const key = `sub:${currentUser}`;
  console.log(key)
  await redis.set(key, JSON.stringify(sub));
  console.log(sub, "in api");
  // subData.push(sub);
  return { success: true }
}
