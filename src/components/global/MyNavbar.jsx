
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";

export default function MyNavbar({ collapsed, setCollapsed }) {
  return (
    <header className=" bg-white dark:bg-gray-900">
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
          <a
            href="#"
            className="text-sm/6 font-semibold text-gray-900 dark:text-white"
          >
            Log in <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </nav>
    </header>
  );
}
