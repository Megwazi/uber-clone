import MapsEng from "@/components/home/MapsEng";
import SearchEng from "@/components/home/SearchEng";
import { SignIn, UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">
      <div>
        <SearchEng/>
      </div>
      <div className="col-span-2">
        <MapsEng/>
      </div>
    </div>
  );
}
