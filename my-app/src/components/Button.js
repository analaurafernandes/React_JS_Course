import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    return(
        <button style={{ backgroundColor: color}} className='btn' onClick={onClick} >{text}</button>
    )
}


Button.defaultProps = {
    color: 'steelblue',
    title: 'Button'
}
Button.propTypes = {
    title: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func
}
export default Button
