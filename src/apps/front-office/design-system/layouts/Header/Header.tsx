<<<<<<< HEAD
import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import HeaderLogo from './HeaderLogo'
import HeaderMenus from './HeaderMenus'
import HeaderContact from './HeaderContact'
import HeaderIcons from './HeaderIcons';
=======
import HeaderBottom from "apps/front-office/design-system/layouts/Header/HeaderBottom";
import HeaderTop from "apps/front-office/design-system/layouts/Header/HeaderTop";
>>>>>>> 390b99f2ef7d7c76d772104a7471a4862c6fbb1e

export default function Header() {
  return (
    <>
<<<<<<< HEAD
    <header className='site-header flex items-center justify-center'>
      <div className="container mx-auto px-4">
        <Disclosure as="nav" className="nav-bar">
          {({ open }) => (
            <>
              <div className="flex h-16 items-center justify-between">
                <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="absolute -inset-0.5" />
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                  <HeaderLogo/>
                  <div className="hidden sm:block">
                      <HeaderMenus/>
                  </div>
                </div>
                <HeaderContact/>
                <HeaderIcons/>
              </div>
              <Disclosure.Panel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                  <HeaderMenus/>
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>
      </div>
    </header>
    </>
  )
}

=======
      <HeaderTop />
      <HeaderBottom />
    </>
  );
}
>>>>>>> 390b99f2ef7d7c76d772104a7471a4862c6fbb1e
