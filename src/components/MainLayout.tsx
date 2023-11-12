import { useState, useEffect } from "react"
import Card from './card/Card'
import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import * as eventsActions from '../redux/actions/eventsActions'
import { State } from '../redux/root-reducer.types'
import * as selectors from '../redux/selectors'

const mapDispatchToProps = (dispatch: (any)) => ({
  setCurrentEvent: (payload: any) => dispatch(eventsActions.setCurrentEvent(payload)),
  setModalState: (payload: any) => dispatch(eventsActions.setModalState(payload)),
  setFilteredEventsList: (payload: any) => dispatch(eventsActions.setFilteredEventsList(payload))
});

const mapStateToProps = (state: State) => ({
  getData: selectors.getData(state),
  getCurrentEvent: selectors.getCurrentEvent(state),
  getFilter: selectors.getFilter(state),
  getFilterName: selectors.getFilterName(state),
  getFilteredEventsList: selectors.getFilteredEventsList(state),
  getSearchTerm: selectors.getSearchTerm(state)
});

const connector = connect(mapStateToProps, mapDispatchToProps)
type MainLayoutProps = ConnectedProps<typeof connector>

const MainLayout : React.FunctionComponent<MainLayoutProps> = ({
  getData,
  setCurrentEvent,
  setFilteredEventsList,
  getCurrentEvent,
  getFilter,
  getFilterName,
  getFilteredEventsList,
  getSearchTerm
}) => {

  const [eventsListReady, setEventsListReady] = useState(false); 
  const [eventsListFilteredReady, setEventsListFilteredReady] = useState(false);  
  const [emptyName, setEmptyName] = useState('');  

  useEffect(() => {
    if (Object.entries(getData).length > 0) {
      setEventsListReady(true)
    }
  }, [getData]);

  useEffect(() => {
    if (Object.entries(getFilteredEventsList).length > 0) {
      setEventsListFilteredReady(true)
    }
  }, [getFilteredEventsList]);

  useEffect(() => {
    if (eventsListReady) { 
      if (getFilter !== '') { 
        const filteredEvents =  getData.filter(item => ((item.classifications.find((element) => (element.primary === true && element.genre.id === getFilter)))))
        setFilteredEventsList(filteredEvents)
      } else 
        setFilteredEventsList(getData)
    }
  }, [eventsListReady, getFilter]);

  
  useEffect(() => {
    if (eventsListReady) { 
        if (getSearchTerm !== '') {
            const filteredEventsWithSearch =  getData.filter(item => 
              item.name.toLowerCase().includes(getSearchTerm.toLowerCase())
            )
            setFilteredEventsList(filteredEventsWithSearch)
         } else {
            setFilteredEventsList(getData)
          }
    }
  }, [eventsListReady, getSearchTerm]);

  
  useEffect(() => {
    if (eventsListReady) { 
        if (getFilter !== '' && getSearchTerm !== '') {
          const filteredEvents =  getData.filter(item => (
            item.classifications.find((element) => (element.primary === true && element.genre.id === getFilter)))
            )
          const filteredEventsWithSearch =  filteredEvents.filter(item =>        
            item.name.toLowerCase().includes(getSearchTerm.toLowerCase())
            )
          setFilteredEventsList(filteredEventsWithSearch)
          setEmptyName(getSearchTerm + ' ' + getFilterName)
        } 
        else if (getFilter === '' && getSearchTerm !== '') {
          const filteredEventsWithSearch =  getData.filter(item => 
            item.name.toLowerCase().includes(getSearchTerm.toLowerCase())
          )
          setFilteredEventsList(filteredEventsWithSearch)
          setEmptyName(getSearchTerm)
        } 
        else if (getFilter !== '' && getSearchTerm === '') {
          const filteredEvents =  getData.filter(item => (
            item.classifications.find((element) => (element.primary === true && element.genre.id === getFilter)))
            )
          setFilteredEventsList(filteredEvents)
          setEmptyName(getFilterName)
        } else {
          setFilteredEventsList(getData)
        }
    }
  }, [eventsListReady, getSearchTerm, getFilter]);

  return (  
    <>
    <div className="main-layout">  
      <div className="main-layout__container"> 
        {eventsListFilteredReady ? (
            getFilteredEventsList.length !== 0 ?
            getFilteredEventsList.map(({ id, images, name, dates, promoter, classifications }) =>  
              <Card 
                  images={images}
                  id={id}
                  key={id}
                  title={name}
                  date={dates.start.dateTime}
                  promoter={promoter.name}
                  getCurrentEvent={getCurrentEvent}
                  onClick={() => {     
                    setCurrentEvent({id})
                  }}
                />
              )
              : <div className="card card__empty">No {emptyName} music events for today...</div>
              
              ) : 'Loading...'         
          }
      </div>
    </div>
    </>
  )
}

export default connector(MainLayout)