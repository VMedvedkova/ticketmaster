import dateFormat from 'dateformat'

type DateProps = {
    date: string
}

export const Date  = (props: DateProps)  => {

  const date = dateFormat(props.date, "dddd, dd.mm.yyyy @ HH:MM")

  return (
        <div className="modal__body__info-table__row">
            <div className="modal__body__info-table__row__icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M3 1V2H2.41602C1.64219 1.99998 1 2.63381 1 3.4082V12.5898C1 13.3642 1.64198 14 2.41602 14H12.582C13.3561 14 14 13.3662 14 12.5918V3.41016C14 2.63575 13.3561 2.00002 12.582 2H12V1H11V2H4V1H3ZM2.41602 3H3V4H4V3H11V4H12V3H12.582C12.8214 3.00001 13 3.1794 13 3.41016V5H2V3.4082C2 3.17743 2.1763 2.99999 2.41602 3ZM2 6H13V12.5918C13 12.8225 12.8215 13 12.582 13H2.41602C2.17651 13 2 12.8206 2 12.5898V6Z" fill="white"/>
                    <path d="M10.9995 7H11.9995V8H10.9995V7ZM8.99951 7H9.99951V8H8.99951V7ZM6.99951 7H7.99951V8H6.99951V7ZM4.99951 7H5.99951V8H4.99951V7ZM8.99951 9H9.99951V10H8.99951V9ZM6.99951 9H7.99951V10H6.99951V9ZM4.99951 9H5.99951V10H4.99951V9ZM2.99951 9H3.99951V10H2.99951V9ZM10.9995 9H11.9995V10H10.9995V9ZM6.99951 11H7.99951V12H6.99951V11ZM4.99951 11H5.99951V12H4.99951V11ZM2.99951 11H3.99951V12H2.99951V11Z" fill="white"/>
                </svg>
            </div>
            <div className="modal__body__info-table__row__data" data-testid="date">
                {date}
            </div>
        </div>
    )
}

export default Date