import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Container from "../../theme/container";
import CharacterCard from "./Character.card";
import StyledCharacters from "./StyledCharacters";

const Characters = ({search}) => {

    const characters = useSelector(state => state.characters);
    const [searchVal, setSearchVal] = useState(null);
    const [error, setError] = useState(false);

    useEffect(()=>{
        if(search.trim()!==''){
            let results = characters.filter(char => char.name.toLowerCase().includes(search.toLowerCase()));
            if(results.length > 0) setSearchVal(results);
            else {
                fetchSearchCharacters(search)
            }
        } else {
            setSearchVal(null)
            setTimeout(() => {
                setError(false)
            }, 2000);
        }
        
    }, [search]);

    async function fetchSearchCharacters(charName){
        const results = await (await fetch(`https://rickandmortyapi.com/api/character/?name=${charName}`)).json();
        
        if(results.error){
            setError(true);
        }
        else{
            setSearchVal(results.results);
            // dispatch({
            //     type: CHAR_INIT,
            //     payload: {
            //         characters: results.results,
            //         pages: results.info.pages,
            //         next: results.info.next
            //     }
            // })
        }
        
    }
    
    if(error){
        return (
            <Container>
                <h1 style={{ textAlign: 'center', marginBottom: '20px'}}>Whaa What are you dumb Morty? This species doesn't exist in the real world. Check your galaxy hole d'bag!</h1>
            </Container>
        )
    }

    return (
        <Container>
            <h1 style={{ textAlign: 'center', marginBottom: '20px'}}>Characters</h1>
            <StyledCharacters>
            {
                !search && characters && characters.map(char =>
                    <CharacterCard key={char.id} {...char}/>
                )
            }
            {
                searchVal && searchVal.map(char =>
                    <CharacterCard key={char.id} {...char}/>
                )
            }
            </StyledCharacters>
        </Container>

    );
}

export default Characters;