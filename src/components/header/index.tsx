import cn from "classnames";
import {
  Button,
  Disclosure,
  Link,
  Menu,
  Text,
  Transition,
  View
} from "components";
import { BellIcon, MenuIcon, XIcon } from "components/icons/outline";
import { Fragment } from "react";

const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
};
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Team", href: "#", current: false },
  { name: "Projects", href: "#", current: false },
  { name: "Calendar", href: "#", current: false },
  { name: "Reports", href: "#", current: false },
];
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
];

interface HeaderProps {
  user?: {};
  onLogin: () => void;
  onLogout: () => void;
  onCreateAccount: () => void;
}

export const Header = () => (
  <Disclosure as="nav" className="bg-gray-800">
    {({ open }) => (
      <>
        <View className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <View className="flex items-center justify-between h-16">
            <View className="flex items-center">
              <View className="flex-shrink-0">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                  alt="Workflow"
                />
              </View>
              <View className="hidden md:block">
                <View className="ml-10 flex items-baseline space-x-4">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={cn(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </View>
              </View>
            </View>
            <View className="hidden md:block">
              <View className="ml-4 flex items-center md:ml-6">
                <Button
                  type="button"
                  className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                >
                  <Text className="sr-only">View notifications</Text>
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </Button>

                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <View>
                    <Menu.Button className="max-w-xs bg-gray-800 rounded-full flex items-center text-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                      <Text className="sr-only">Open user menu</Text>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user.imageUrl}
                        alt=""
                      />
                    </Menu.Button>
                  </View>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {userNavigation.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }) => (
                            <Link
                              href={item.href}
                              className={cn(
                                active ? "bg-gray-100" : "",
                                "block px-4 py-2 text-sm text-gray-700"
                              )}
                            >
                              {item.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </View>
            </View>
            <View className="-mr-2 flex md:hidden">
              {/* Mobile menu button */}
              <Disclosure.Button className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                <Text className="sr-only">Open main menu</Text>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </View>
          </View>
        </View>

        <Disclosure.Panel className="md:hidden">
          <View className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navigation.map((item) => (
              <Disclosure.Button
                key={item.name}
                as="a"
                href={item.href}
                className={cn(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block px-3 py-2 rounded-md text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Disclosure.Button>
            ))}
          </View>
          <View className="pt-4 pb-3 border-t border-gray-700">
            <View className="flex items-center px-5">
              <View className="flex-shrink-0">
                <img
                  className="h-10 w-10 rounded-full"
                  src={user.imageUrl}
                  alt=""
                />
              </View>
              <View className="ml-3">
                <View className="text-base font-medium leading-none text-white">
                  {user.name}
                </View>
                <View className="text-sm font-medium leading-none text-gray-400">
                  {user.email}
                </View>
              </View>
              <Button
                type="button"
                className="ml-auto bg-gray-800 flex-shrink-0 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
              >
                <Text className="sr-only">View notifications</Text>
                <BellIcon className="h-6 w-6" aria-hidden="true" />
              </Button>
            </View>
            <View className="mt-3 px-2 space-y-1">
              {userNavigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-400 hover:text-white hover:bg-gray-700"
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </View>
          </View>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
  // <header>
  //   <div className="wrapper">
  //     <div>
  //       <svg
  //         width="32"
  //         height="32"
  //         viewBox="0 0 32 32"
  //         xmlns="http://www.w3.org/2000/svg"
  //       >
  //         <g fill="none" fillRule="evenodd">
  //           <path
  //             d="M10 0h12a10 10 0 0110 10v12a10 10 0 01-10 10H10A10 10 0 010 22V10A10 10 0 0110 0z"
  //             fill="#FFF"
  //           />
  //           <path
  //             d="M5.3 10.6l10.4 6v11.1l-10.4-6v-11zm11.4-6.2l9.7 5.5-9.7 5.6V4.4z"
  //             fill="#555AB9"
  //           />
  //           <path
  //             d="M27.2 10.6v11.2l-10.5 6V16.5l10.5-6zM15.7 4.4v11L6 10l9.7-5.5z"
  //             fill="#91BAF8"
  //           />
  //         </g>
  //       </svg>
  //       <h1>Acme</h1>
  //     </div>
  //     <div>
  //       {user ? (
  //         <Button size="small" onClick={onLogout} label="Log out" />
  //       ) : (
  //         <>
  //           <Button size="small" onClick={onLogin} label="Log in" />
  //           <Button
  //             primary
  //             size="small"
  //             onClick={onCreateAccount}
  //             label="Sign up"
  //           />
  //         </>
  //       )}
  //     </div>
  //   </div>
  // </header>
);
