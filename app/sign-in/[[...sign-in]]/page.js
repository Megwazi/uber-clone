import { SignIn } from "@clerk/nextjs";
import Image from "next/image";

export default function Page() {
  return (
    <div>
      <Image src='/uber-ss.jpg' width={1280} height={847}
        className="object-contain h-full w-full" />
      <div className="absolute top-10 left-5">
        <SignIn />
      </div>
    </div>
  );
}