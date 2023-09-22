import { UserButton } from "@clerk/nextjs";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>home page</h1>
      <UserButton afterSignOutUrl="/" />
    </div>
  );
}
