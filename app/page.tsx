"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <h1>hi there</h1>
      <div className="flex flex-col gap-2">
        <button onClick={() => router.push("/profile/1")}>go to id:1</button>
        <button onClick={() => router.push("/profile/2")}>go to id:2</button>
        <button onClick={() => router.push("/profile/3")}>go to id:3</button>
      </div>
    </>
  );
}
