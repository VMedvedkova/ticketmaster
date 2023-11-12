type PromoterProps = {
    promoter: string
}

const Promoter = (props: PromoterProps) => {

return (
        <div className="modal__body__info-table__row">
            <div className="modal__body__info-table__row__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="15" viewBox="0 0 13 15" fill="none">
                    <path d="M1.5 0C0.675781 0 0 0.692141 0 1.53631V11.2663H4V14.3389H13V4.60894C13 3.76477 12.3242 3.07263 11.5 3.07263H9V1.53631C9 0.692141 8.32422 0 7.5 0H1.5ZM1.5 1.02421H7.5C7.78125 1.02421 8 1.24825 8 1.53631V3.07263H7V2.04842H5V3.07263H5.5C4.67578 3.07263 4 3.76477 4 4.60894V4.09684H2V5.12105H4V6.14526H2V7.16946H4V8.19367H2V9.21788H4V10.2421H1V1.53631C1 1.24825 1.21875 1.02421 1.5 1.02421ZM2 2.04842V3.07263H4V2.04842H2ZM5.5 4.09684H11.5C11.7812 4.09684 12 4.32088 12 4.60894V13.3147H5V4.60894C5 4.32088 5.21875 4.09684 5.5 4.09684ZM6 5.12105V6.14526H8V5.12105H6ZM9 5.12105V6.14526H11V5.12105H9ZM6 7.16946V8.19367H8V7.16946H6ZM9 7.16946V8.19367H11V7.16946H9ZM6 9.21788V10.2421H8V9.21788H6ZM9 9.21788V10.2421H11V9.21788H9ZM6 11.2663V12.2905H8V11.2663H6ZM9 11.2663V12.2905H11V11.2663H9Z" fill="white"/>
                </svg>
            </div>
            <div 
                className="modal__body__info-table__row__data"        
                data-testid="promoter"
            >
                {props.promoter}
            </div>
        </div>                 
    )
};

export default Promoter