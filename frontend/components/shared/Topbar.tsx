import Image from "next/image";
import Link from "next/link";

function Topbar() {
  return (
    <nav className="topbar">
      <Link href="/" className="flex flex-row-reverse items-center gap-4">
        <Image src="./logo/logo.svg" alt="logo" width={100} height={100} />
      </Link>
    </nav>
  );
}
export default Topbar;
