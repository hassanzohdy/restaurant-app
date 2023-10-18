<<<<<<< HEAD
import { IconShoppingBag } from "@tabler/icons-react";
import { headerCartAtom } from "apps/front-office/design-system/atoms/header-cart-atom";
import OverLay from "../../OverLay";
import HeaderCartSidebar from "./HeaderCartSidebar";

export default function HeaderCart() {
  const { cartCount, opened } = headerCartAtom.useValue();
  return (
    <>
      <div className="header-cart">
        <span
          onClick={() => headerCartAtom.change("opened", true)}
          className="icon flex items-center justify-center">
          <IconShoppingBag />
          <span className="cart-count">{cartCount}</span>
        </span>
        <HeaderCartSidebar />
        <OverLay atom={headerCartAtom} opened={opened} />
=======
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
>>>>>>> 771d18da8db3945a77e32c400e14e2e57b22ffd5
      </div>
    </>
  );
}
