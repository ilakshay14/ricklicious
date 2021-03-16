import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import banner from './banner.png';
import Characters from './components/Characters/Characters';
import Search from './components/Search/search';
import { CHAR_INIT } from './constants/action.constants';
import { FlexRow } from './theme/defaultStyles';

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

    useEffect(() => {
        fetchCharacters();
    }, []);

    async function fetchCharacters(){
        const results = await (await fetch('https://rickandmortyapi.com/api/character')).json();
        console.log(results.results[0]);
        dispatch({
            type: CHAR_INIT,
            payload: {
                characters: results.results,
                pages: results.info.pages,
                next: results.info.next
            }
        })
    }

    return (
        <StyledLayout>
            <header>
                <img src={banner}/>
            </header>
            <Search/>
        </StyledLayout>
    );
}

export default App;