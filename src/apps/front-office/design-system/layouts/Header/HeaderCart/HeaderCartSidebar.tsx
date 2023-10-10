import { headerCartAtom } from "apps/front-office/design-system/atoms/header-cart-atom";
import { IconX } from "@tabler/icons-react";
import { trans } from "@mongez/localization";

export default function HeaderCartSidebar() {

    const opened = headerCartAtom.use("opened");
    
    return (
        <>
         <div className={`header-cart-sidebar ${opened ? 'show' : 'hide'}`}>
            <div className="heading flex items-center justify-between">
                <h3 className="title">{trans('shoppingCart')}</h3>
                <span onClick={() => headerCartAtom.change('opened', false)} className="close flex items-center">{trans('close')}<IconX stroke="3"/></span>
            </div>
         </div>
        </>
    )
}