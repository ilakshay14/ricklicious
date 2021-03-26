import StyledThemeToggler from "./StyledThemeToggler";
import MORTY from './morty.png';
import RICK from './rick.png';

const ThemeToggler = ({ handleThemeToggle }) => {

    return (
        <StyledThemeToggler>
            <img src={MORTY} className='morty' />
            <input type="checkbox" id="switch" onChange={handleThemeToggle} />
            <label htmlFor="switch" />
            <img src={RICK} className='rick' />
        </StyledThemeToggler>
    );
}

export default ThemeToggler;