import { Disclosure, DisclosureButton, DisclosurePanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import appLogo from "../assets/logos/kobodrop_logo.svg";

const Nav = () => {
  return (
    <Disclosure as="nav">
      {({ open }) => (
        <>
          <div className="flex h-[10vh] max-w-7xl items-center justify-between px-8">
            <div className="flex">
              <a href="#">
                <img src={appLogo} alt="app logo" />
              </a>
              <div className="ml-4 flex hidden items-center space-x-4 sm:flex">
                <a
                  className="text-gray-500 hover:text-gray-900 active:text-gray-400"
                  href="#features"
                >
                  Features
                </a>
                <a
                  className="text-gray-500 hover:text-gray-900 active:text-gray-400"
                  href="#partners"
                >
                  Partners
                </a>
                <a
                  className="text-gray-500 hover:text-gray-900 active:text-gray-400"
                  href="#reviews"
                >
                  Reviews
                </a>
              </div>
            </div>
            <a
              href="https://play.google.com"
              target="_blank"
              className="hidden rounded-xl bg-gray-800 px-5 py-3 text-white hover:bg-gray-900 active:bg-gray-600 sm:flex"
            >
              Install App
            </a>
            <DisclosureButton className="rounded-md sm:hidden p-2 text-gray-500 hover:bg-gray-700 hover:text-white">
              {open ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </DisclosureButton>
          </div>
          <DisclosurePanel className='space-y-1'>
            <DisclosureButton className="block" as='a' href='#features'>
              Features
            </DisclosureButton>
            <DisclosureButton className="block" as='a' href='#partners'>
              Partners
            </DisclosureButton>
            <DisclosureButton className="block" as='a' href='#reviews'>
              Reviews
            </DisclosureButton>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
};

export default Nav;
