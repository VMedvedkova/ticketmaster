import Navigation from './Navigation'
import Search from './search/Search'

const HeaderLayout = () => {

  return (  
      <div className="header">        
        <div className="container">
          <div className="header__container">
            <h1 className="header__container__logo">
              Music events
            </h1>
            <Search />
          </div>
          <Navigation />
        </div>
      </div>
  )
}

export default HeaderLayout
