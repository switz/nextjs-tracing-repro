import ExtraWork from "./extrawork";

/** Add your relevant code here for the issue to reproduce */
export default async function Home() {

  await sleep(500);

  return <div>

home
<ExtraWork />
  </div> ;
}

export const sleep = async (ms: number) => {
  return new Promise<void>(resolve => {

    setTimeout(() => resolve(), ms);
  })
}
