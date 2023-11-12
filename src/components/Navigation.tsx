import React from 'react'
import { useState, useEffect } from "react"
import useApiData from '../api'
import * as constants from '../utils/constants'
import { connect, ConnectedProps } from 'react-redux'
import * as genresActions from '../redux/actions/genresActions'
import { State } from '../redux/root-reducer.types'
import * as selectors from '../redux/selectors'

const mapDispatchToProps = (dispatch: (any)) => ({
  setGenres: (payload: any) => dispatch(genresActions.setGenres(payload)),
  setFilter: (payload: any) => dispatch(genresActions.setFilter(payload))
});

const mapStateToProps = (state: State) => ({
  getGenres: selectors.getGenres(state),
  getFilter: selectors.getFilter(state) 
});

const connector = connect(mapStateToProps, mapDispatchToProps)
type NavProps = ConnectedProps<typeof connector>


const Navigation: React.FunctionComponent<NavProps> = ({
  setGenres,
  getGenres,
  setFilter,
  getFilter
}) => {

  const defaultNumberMenuItems = 4
  const defaultActiveClassName = "header__navbar__item"
  const defaultShowMoreTxt = ['More...', 'Less...']  
  const [genresListReady, setGenresListReady] = useState(false);
  const [showMore, setShowMore] = useState(true); 
  const [showMoreTxt, setShowMoreTxt] = useState(defaultShowMoreTxt[0]); 
  const [numberMenuItems, setNumberMenuItems] = useState(defaultNumberMenuItems);  

  const url = constants.musicGenres
  const results = useApiData(url)
  
  useEffect(() => {
    if (Object.entries(getGenres).length === 0) {
      setGenres(results)
    }
  }, [results]);

  useEffect(() => {
    if (Object.entries(getGenres).length > 0) {
      setGenresListReady(true)
    }
  }, [getGenres]);

  function toggleMenuItems() {
    setNumberMenuItems(showMore ? getGenres.genres.length : defaultNumberMenuItems)
    setShowMore(showMore ? false : true)
    setShowMoreTxt(showMore ? defaultShowMoreTxt[1] : defaultShowMoreTxt[0])
  }   

  function setActiveMenu(id, name, getFilter) {
    setFilter({'id': id, 'name': name})
  } 

  function setActiveMenuClass(id, getFilter) {
    if (getFilter === id) 
      return (defaultActiveClassName + ' ' + defaultActiveClassName + '__active' )
    else 
      return defaultActiveClassName
  } 
  
  return (
    <nav className="header__navbar"> 
        {genresListReady ? (

          <ul>
            <li 
              className={setActiveMenuClass('', getFilter)}
              onClick={() => { 
                  setActiveMenu('', '', getFilter)
                }}
              >All genres
            </li>

            {getGenres.genres.slice(0, numberMenuItems).map(({ id, name }) =>  
              <li 
                key={id}
                className={setActiveMenuClass(id, getFilter)}
                onClick={() => { 
                    setActiveMenu(id, name, getFilter)
                  }}
                >{name}
              </li>
            )}

            {<li 
              className={defaultActiveClassName}
              onClick={() => { 
                toggleMenuItems()
                }}
              >{showMoreTxt}
            </li> 
            }

          </ul>
            )
            : ''
          }
    </nav>
  )
}

export default connector(Navigation)