import Account from "../Account/Account";
import SearchModal from "../SearchModal/SearchModal";
import {useStateContext} from '../../HBOProvider'


const Header = (props) => {
  const globalState = useStateContext();

  return(<header className={`top-header ${globalState.accountModalOpen || globalState.sideNavModalOpen ? 'top-header--menu-open' : ''}`}>
    <div className="top-header__left-side">
      <div className="top-header__menu-btn" onClick={() => globalState.setSideNavOpenAction(true)}>
        <i className="fas fa-bars"/>
      </div>
      <div className="top-header__search-btn">
        <i className="fas fa-search"/>
      </div>
    </div>
    <div className="top-header__logo"></div>
    <div className="top-header__account" onClick={() => globalState.setAccountModalOpenAction(!globalState.accountModalOpen)}>
      <img src="https://images.generated.photos/0nDYZvW2PyRknrz8QtVclfVvXVllxOnNx1t-BGnNve0/rs:fit:512:512/wm:0.95:sowe:18:18:0.33/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/NzI1Mzc0LmpwZw.jpg" className="top-header__user-img"/>
      <div ClasssName="top-header__user-name">Bryant</div>
    </div>
    <Account />
    <SearchModal />
  </header>)
}
export default Header;