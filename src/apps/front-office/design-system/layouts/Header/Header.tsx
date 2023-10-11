import { Disclosure } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import HeaderLogo from './HeaderLogo'
import HeaderMenus from './HeaderMenus'
import HeaderContact from './HeaderContact'
import HeaderIcons from './HeaderIcons';

export default function Header() {
  return (
    <>
    <header className='site-header flex items-center justify-center'>
      <div className="container mx-auto px-4">
        <Disclosure as="nav" className="nav-bar">
          {({ open }) => (
            <>
              <div className="flex h-16 items-center justify-between">
                <div className='flex'>
                  <HeaderLogo/>
                  <div className="md:block">
                      <HeaderMenus open={open}/>
                  </div>
                </div>
               <div className='flex'>
                  <HeaderContact/>
                  <HeaderIcons/>
                  {/* Mobile menu button*/}
                  <Disclosure.Button className="header-menu-toggle relative inline-flex items-center justify-center md:hidden">
                      <span className="absolute -inset-0.5" />
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                      )}
                    </Disclosure.Button>
                </div>
              </div>
            </>
          )}
        </Disclosure>
      </div>
    </header>
    </>
  )
}

