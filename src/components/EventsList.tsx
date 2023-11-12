import React from 'react'
import { useEffect } from "react"
import useApiData from '../api'
import * as constants from '../utils/constants'
import { connect, ConnectedProps } from 'react-redux'
import * as eventsActions from '../redux/actions/eventsActions'

const mapDispatchToProps = (dispatch: (any)) => ({
  setData: (payload: any) => dispatch(eventsActions.setData(payload))
});

const connector = connect(null, mapDispatchToProps)
type EventsListProps = ConnectedProps<typeof connector>;

const EventsList: React.FunctionComponent<EventsListProps> = ({
    setData
}) => {

  const url = constants.musicEvents
  const results = useApiData(url)

  useEffect(() => {  
    if (Object.entries(results).length > 0) {
        results.events.sort(function (a : {dates: {start: {dateTime: string}}}, b : {dates: {start: {dateTime: string}}}) {
          const aDate = new Date(a.dates.start.dateTime).getTime();
          const bDate = new Date(b.dates.start.dateTime).getTime();
          return aDate - bDate;
        });   
      setData(results.events)
    }   
  }, [setData, results]); 

  return <></>
};

export default connector(EventsList);
