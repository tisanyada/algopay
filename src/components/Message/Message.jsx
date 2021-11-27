


const Message = ({ message, type }) => {
    return (
        <span className={'badge ' + (type === 'success' ? 'alert-success p-2 col-5' : 'alert-warning  p-2 col-5')}>
            {message}
        </span>
    )
}

export default Message
