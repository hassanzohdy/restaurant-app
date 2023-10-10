import { headerCartAtom } from "apps/front-office/design-system/atoms/header-cart-atom";

export default function HeaderCartOverlay() {
    const opened = headerCartAtom.use("opened");
    return(
        <>
            <div
                className={`header-cart-overlay ${opened ? 'show' : 'hide'}`}
                onClick={() => headerCartAtom.change('opened', false)} 
             ></div>
        </>
    )
}