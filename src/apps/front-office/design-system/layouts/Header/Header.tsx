import { IconMenu2, IconX } from '@tabler/icons-react'
import HeaderLogo from './HeaderLogo'
import HeaderMenus from './HeaderMenus'
import HeaderContact from './HeaderContact'
import HeaderIcons from './HeaderIcons';
import { headerMobileMenuAtom } from '../../atoms/header-mobile-menu-atom'

export default function Header() {
  const opened = headerMobileMenuAtom.use("opened");
  return (
    <>
    <header className='site-header flex items-center justify-center'>
      <div className="container mx-auto px-4">
        <nav className="nav-bar">
            <>
              <div className="flex h-16 items-center justify-between">
                <div className='flex'>
                  <HeaderLogo/>
                  <div className="md:block">
                      <HeaderMenus opened={opened}/>
                  </div>
                </div>
               <div className='flex items-center'>
                  <HeaderContact/>
                  <HeaderIcons/>
                  {/* Mobile menu button*/}
                  <button className="header-menu-toggle relative inline-flex items-center justify-center lg:hidden"
                   >
                      {opened ? (
                        <span onClick={() => headerMobileMenuAtom.change('opened', false)}><IconX className="block h-6 w-6" /></span>
                      ) : (
                        <span onClick={() => headerMobileMenuAtom.change('opened', true)}><IconMenu2 className="block h-6 w-6" /></span>
                      )}
                    </button>
                </div>
              </div>
            </>
        </nav>
      </div>
    </header>
    </>
  )
}

