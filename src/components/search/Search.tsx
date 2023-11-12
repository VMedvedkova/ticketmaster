import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { State } from '../../redux/root-reducer.types'
import * as eventsActions from '../../redux/actions/eventsActions'
import * as selectors from '../../redux/selectors'

const mapStateToProps =  (state: State) => ({
    getSearchTerm: selectors.getSearchTerm(state)
});

const mapDispatchToProps = (dispatch: (any)) => ({
    setSearchTerm: (payload: any) => dispatch(eventsActions.setSearchTerm(payload))
})

const connector = connect(mapStateToProps, mapDispatchToProps)
type SerchProps = ConnectedProps<typeof connector>;
  
  
const Search: React.FunctionComponent<SerchProps> = ({
  setSearchTerm,
  getSearchTerm
}) => {

  const handleChange = event => {
    setSearchTerm(event.target.value)
  } 

  const clearChange = () => {
    setSearchTerm('')
  } 

  return ( 
    <div className="header__container__search-from">
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none" 
        className="header__container__search-from__search-icon"
        >
        <path fillRule="evenodd" clipRule="evenodd" d="M11.6544 10.807C12.607 9.66427 13.1801 8.19408 13.1801 6.59004C13.1801 2.95046 10.2296 3.8147e-06 6.59003 3.8147e-06C2.95046 3.8147e-06 0 2.95046 0 6.59004C0 10.2296 2.95046 13.1801 6.59003 13.1801C8.19413 13.1801 9.66437 12.6069 10.8071 11.6543L15.1529 16L16.0001 15.1528L11.6544 10.807ZM6.59003 11.8655C3.67648 11.8655 1.31458 9.50358 1.31458 6.59004C1.31458 3.67649 3.67648 1.31459 6.59003 1.31459C9.50357 1.31459 11.8655 3.67649 11.8655 6.59004C11.8655 9.50358 9.50357 11.8655 6.59003 11.8655Z" fill="#252B40"/>
      </svg>
      <input 
          className="header__container__search-from__input" 
          type="text"
          placeholder="Search for events..." 
          value={getSearchTerm}
          onChange={handleChange}
          data-testid="search"
        >          
      </input>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
        className="header__container__search-from__close-icon"
        onClick={clearChange}      
        >
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
        <title>Clear search</title>
      </svg>
    </div>
  )
};

export default connector(Search)
