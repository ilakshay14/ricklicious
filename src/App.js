import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import banner from './banner.png';
import Search from './components/Search/search';
import ThemeToggler from './components/ThemeToggler/ThemeToggler';
import { CHAR_INIT } from './constants/action.constants';
import { FlexRow } from './theme/defaultStyles';
import { lightTheme, darkTheme } from './theme/theme';
import GlobalStyle from './theme/globalStyles';
import SingleCharacter from './components/Characters/SingleCharacter';

const StyledLayout = styled.div`
    max-width: 1200px;
    //border: 5px solid white;
    margin: auto;
    ${FlexRow}
    header{
        width: 90%;
        height: 200px;
        
        ${FlexRow}

        img{
            width: 100%;
            height: 100%;
            object-fit: contain;
            
        }
    }

    @media screen and (min-width: 56rem) {
        padding: 2%;

        header {
            width: 100%;
            height: 25rem;
        }
    }
`;

const App = () => {

    const dispatch = useDispatch();
    const [theme, setTheme] = useState('light');

    const toggleTheme = () => {
        // let newTheme = theme === 'light' ? 'dark' : 'light';

        // localStorage.setItem('ricktheme', newTheme);
        // setTheme(newTheme);
        theme === 'light' ? setTheme('dark') : setTheme('light');
    }

    useEffect(() => {
        // const themeInCookie = localStorage.getItem('ricktheme');
        // if (themeInCookie) {
        //     console.log(themeInCookie);
        //     themeInCookie === 'light' ? setTheme('light') : setTheme('dark');
        // }
        fetchCharacters();
    }, []);

    async function fetchCharacters() {
        const results = await (await fetch('https://rickandmortyapi.com/api/character')).json();
        //console.log(results);
        dispatch({
            type: CHAR_INIT,
            payload: {
                characters: results.results,
                pages: results.info.pages,
                next: results.info.next,
                prev: results.info.prev
            }
        })
    }

    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
            <GlobalStyle />
            <StyledLayout>
                <ThemeToggler handleThemeToggle={toggleTheme} />
                <header>
                    <img src={banner} />
                </header>
                <Route exact path='/' component={Search} />
                <Route path='/character/:id' component={SingleCharacter} />
                {/* <Search /> */}
            </StyledLayout>
        </ThemeProvider>
    );
}

export default App;