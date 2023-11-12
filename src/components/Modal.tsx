import React from "react"
import Date from './date/Date'
import Promoter from './promoter/Promoter'

type ModalProps = {
    show: boolean
    title: string
    date: string
    promoter: string
    onClose: () => void
    image: string
    id: string 
}

const Modal = React.forwardRef<HTMLDivElement, ModalProps>((props, ref) => {

    return (!props.show) ? null : (

        <div className="modal" ref={ref}>
            <div className="modal__content">
                <div 
                    className="modal__content__image-holder" 
                    style={{backgroundImage: ' url(' + props.image + ')'}}
                >
                </div>
                <div className="modal__content__body">
                        <h2>{props.title}</h2>
                        <div className="modal__content__body__info-table">
                            <Date date={props.date} />
                            <Promoter promoter={props.promoter} />
                        </div>
                        <p className="modal__content__body__txt">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        </p>
                        <div 
                            className="button" 
                            onClick={props.onClose}
                        >Close details
                        </div>
                </div>
            </div>
        </div>
    
    )    
})

export default Modal