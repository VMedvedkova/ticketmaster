import React, { useState, useEffect } from "react"
import Modal from '../Modal'

type CardProps = {
    id: string
    getCurrentEvent: {
      id: string
    }
    onClick: () => void
    images: { url: string }[] 
    title: string
    date: string
    promoter: string
}

const Card = ({id, getCurrentEvent, onClick, images, title, date, promoter} : CardProps) => {
  
  const defaultPadding = '8px';
  const [show, setShow] = useState(false)
  const [currentEvent, setCurrentEvent] = useState(false)
  const [height, setHeight] = useState(0)

  const ref = React.createRef<HTMLDivElement>();

  useEffect(() => {
    if (ref.current !== null) { 
      setHeight(ref.current.clientHeight)    
    }
  }, [ref]);
  
  useEffect(() => {    
    setCurrentEvent((id === getCurrentEvent.id) ? true : false)
  }, [id, getCurrentEvent]);
  
  return (  
    <>
    <div 
      className={"card " + ((currentEvent && show) ? 'card__open' : '')} 
      onClick={onClick} 
      style={{
        paddingBottom: (currentEvent && show) ? (height + 'px') : defaultPadding
      }}
          >
      <div       
        style={{
          backgroundImage: ' url(' + images[0].url + ')'
        }}
        className="img" 
        onClick={() => {
          show ? setShow(currentEvent ? false : true) : setShow(true)          
          }
        }
        data-testid="card"
      ></div>
      <Modal 
          onClose={() => {
              setShow(false)
          }} 
          show={currentEvent ? show : false}
          id={id}  
          title={title}  
          date={date}
          promoter={promoter}  
          image={images[0].url}
          key={id} 
          ref={ref} 
          />      
      </div>
    </>
  )
}

export default Card