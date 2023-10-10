import { IconShoppingBag } from '@tabler/icons-react';
import { headerCartAtom } from 'apps/front-office/design-system/atoms/header-cart-atom';
import HeaderCartSidebar from './HeaderCartSidebar';
import HeaderCartOverlay from './HeaderCartOverlay';

export default function HeaderCart() {

  const {cartCount} = headerCartAtom.useValue();
  return (
    <>
      <div className="header-cart">
        <span onClick={() => headerCartAtom.change('opened', true)} className="icon flex items-center justify-center"><IconShoppingBag/> 
        <span className='cart-count'>{cartCount}</span>
        </span>
        <HeaderCartSidebar/>
        <HeaderCartOverlay/>
      </div>
    </>
  );
}
