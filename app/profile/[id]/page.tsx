"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useEffect } from "react";
export default function ProfileId() {
  const params = useParams();
  const router = useRouter();
  useEffect(() => console.log(params), [params]);
  return (
    <>
      <div>this is profileId:{params.id}</div>
      <button onClick={() => router.push("/")}>go to home </button>
    </>
  );
}
