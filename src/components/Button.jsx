import './button.css'

const Button = ({ handleFunction, text }) => {
    return (
        <button className='btn-31' onClick={handleFunction}>
            <span className="text-container">
                <span className="text">{text}</span>
            </span>
        </button>
    )
}

export default Button
