'use client';


export default function ExtraWork2() {
  let i = 0;

  while (true) {
    // simulate work
    if (++i > 1000000000) break;
  }

  return 'work2';
}