import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { FaBell } from "react-icons/fa";

// import { useState } from 'react'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  ChartPieIcon,
  CursorArrowRaysIcon,
  FingerPrintIcon,
  SquaresPlusIcon,
} from "@heroicons/react/24/outline";
import {
  ChevronDownIcon,
  PhoneIcon,
  PlayCircleIcon,
} from "@heroicons/react/20/solid";
import BellContext from "../BellContext";
import { useContext } from "react";



export default function MyNavbar({ collapsed, setCollapsed }) {
  const data=useContext(BellContext)
  const {bellarr} =data;
  return (
    <header className=" bg-white dark:bg-black">
    
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex text-white">
          <div>
            <button
              className="sb-button"
              onClick={() => setCollapsed(!collapsed)}
            >
              {collapsed ? <IoIosArrowForward /> : <IoIosArrowBack />}
            </button>
          </div>
        </div>

        <div className=" lg:flex lg:flex-1 lg:justify-end">
          <PopoverGroup className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <PopoverButton className="flex items-center gap-x-1 text-sm/6 font-semibold text-white">
                <div className=" text-white">
                  <FaBell />
                </div>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="size-5 flex-none text-gray-500"
                />
              </PopoverButton>

              <PopoverPanel
                transition
                className="absolute left-1/2 z-10 mt-3 w-[calc(100vw-2rem)] max-w-md -translate-x-1/2 overflow-hidden rounded-3xl bg-gray-800 outline-1 -outline-offset-1 outline-white/10 transition data-closed:translate-y-1 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-150 data-leave:ease-in"
              >
                <div className="p-4">
                  {bellarr.map((item) => (
                  <div
                    key={item.id}
                    className="group relative flex items-center gap-x-6 rounded-lg p-2 text-sm/6 hover:bg-white/5"
                  >
                    {/* <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                      <item.icon aria-hidden="true" className="size-6 text-gray-400 group-hover:text-white" />
                    </div> */}
                    <div className="flex-auto mt-1 border border-white p-2 rounded-3xl ">

                      
                      <p className=" text-gray-400">{item.type}</p>
                      <p className="mt-1 text-gray-400">{item.message}</p>
                    </div>
                  </div>
                ))}
                </div>
              
              </PopoverPanel>
            </Popover>
          </PopoverGroup>
          <a
            href="#"
            className="text-sm/6 font-semibold text-gray-900 dark:text-white"
          >
            Log out <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}

{
  /* {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-white/5"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-700/50 group-hover:bg-gray-700">
                      <item.icon aria-hidden="true" className="size-6 text-gray-400 group-hover:text-white" />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-white">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-400">{item.description}</p>
                    </div>
                  </div>
                ))} */
}
