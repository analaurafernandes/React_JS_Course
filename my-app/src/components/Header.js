import PropTypes from 'prop-types'
import Button from './Button'
const Header = ({ title, onAdd, showAdd }) => {
    return(
        <div>
            <header className='header'>
                <h1>{title}</h1>
                <Button color='black' text={ showAdd? 'Close' : 'Add' } onClick={onAdd}/>
            </header>
        </div>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
}
export default Header