import { IconShoppingBag } from '@tabler/icons-react';
import { headerCartAtom } from 'apps/front-office/design-system/atoms/header-cart-atom';
import HeaderCartSidebar from './HeaderCartSidebar';
import OverLay from '../../OverLay';

export default function HeaderCart() {

  const {cartCount, opened} = headerCartAtom.useValue();
  return (
    <>
      <div className="header-cart">
        <span onClick={() => headerCartAtom.change('opened', true)} className="icon flex items-center justify-center"><IconShoppingBag/> 
        <span className='cart-count'>{cartCount}</span>
        </span>
        <HeaderCartSidebar/>
        <OverLay atom={headerCartAtom} opened={opened} />
      </div>
    </>
  );
}
