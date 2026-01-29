import { sleep } from "./page";

export default async function ExtraWork() {

  await sleep(2000);

  return 'work';
}