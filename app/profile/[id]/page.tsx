"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect } from "react";
export default function ProfileId() {
  const params = useParams();
  useEffect(() => console.log(params), [params]);
  return (
    <>
      <div>this is profileId:{params.id}</div>
      <Link href={"/"}>go to home</Link>
    </>
  );
}
