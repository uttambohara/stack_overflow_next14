import { Search } from "lucide-react";
import Image from "next/image";
import { ModeToggle } from "./ModeToggle";

export default function Header() {
  return (
    <header className="border-b border-gray-100 flex gap-3 items-center px-6 justify-between">
      <div>
        <Image
          src="/logo.svg"
          alt="Company Logo"
          height={70}
          width={120}
          priority
        />
      </div>

      <div className="relative hidden sm:block">
        <div className="absolute top-2.5 left-2">
          <Search size={20} color="gray" />
        </div>

        <input
          type="text"
          placeholder="Search anything globally...."
          className="h-[2.5rem] w-[20rem] rounded-md outline-none border border-gray-100 py-3 px-8"
        />
      </div>

      <ModeToggle />
    </header>
  );
}
