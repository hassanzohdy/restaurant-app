import { trans } from "@mongez/localization";
import { Link } from "@mongez/react-router";
import { headerAccountAtom } from "apps/front-office/design-system/atoms/header-account-atom";
import URLS from "apps/front-office/utils/urls";

export default function HeaderAccountDropdown () {
    const opened = headerAccountAtom.use('opened');
    return (
        <>
        <div 
            style={{
                display: opened ? 'block' : 'none'
            }}
            className="header-account-dropdwon">
            <div className="heading flex items-center justify-between">
                <h3 className="title">{trans('signIn')}</h3>
                <Link to={URLS.auth.register}>{trans('createAnAccount')}</Link>
            </div>
            <form>
                <div className="form-group flex flex-col">
                    <label>{trans('userNameOrEmail')}</label>
                    <input type="text" placeholder={trans('userName')}/>
                </div>
                <div className="form-group flex flex-col">
                    <label>{trans('password')}</label>
                    <input type="text" placeholder={trans('password')}/>
                </div>
                <button type="submit" className="w-full">{trans('login')}</button>
            </form>
            <Link to={URLS.auth.forgotPassword}>{trans('createAnAccount')}</Link>
        </div>
        </>
    )
}