import Image from "next/image";
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  HeartIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";
import { signOut, useSession } from "next-auth/react";
import { signIn } from "next-auth/react";
import { useRecoilState } from "recoil";
import { modalState } from "./../atoms/modalAtom";
import { useRouter } from "next/dist/client/router";

function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-10">
      <div className="flex justify-between max-w-6xl mx-5 xl:mx-auto items-center">
        {/* Left Side */}
        <div
          className="relative hidden lg:inline-grid h-14 w-28 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="https://logowiki.net/uploads/logo/i/instagram-1.svg"
            className="w-25"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div
          className="relative w-10 h-10 lg:hidden flex-shrink-0 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <Image
            src="https://logowiki.net/uploads/logo/i/instagram-glyph-1.svg"
            layout="fill"
            objectFit="contain"
          />
        </div>
        {/* Middle */}
        <div className="max-w-sm ">
          <div className="relative mt-1 p-3 rounded-md ">
            <div className="absolute inset-y-0 pl-3 flex items-center  pointer-events-none ">
              <SearchIcon className="h-5 w-5 text-gray-400 " />
            </div>
            <input
              className="bg-gray-50 block w-full pl-10 sm:text-sm border-gray-300 rounded-md focus:ring-black focus:border-black"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
        {/* Right Side */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" onClick={() => router.push("/")} />
          <MenuIcon className="navBtn2 md:hidden" />

          {session ? (
            <>
              <div className="relative navBtn">
                <PaperAirplaneIcon className="navBtn rotate-45" />
                <div className="absolute -top-2 -right-2 text-xs w-5 h-5 bg-red-500 rounded-full text-center animate-pulse">
                  34
                </div>
              </div>
              <PlusCircleIcon
                className="navBtn2"
                onClick={() => setOpen(true)}
              />
              <UserGroupIcon className="navBtn" />
              <HeartIcon className="navBtn" />
              <img
                onClick={signOut}
                className="h-10 w-10 rounded-full cursor-pointer"
                src={session.user.image}
                alt="Profile Pic"
              />
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;
