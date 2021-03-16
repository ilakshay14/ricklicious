import { useEffect, useState } from "react";
import Characters from "../Characters/Characters";
import StyledSearch from "./StyledSearch";

const Search = () => {
    const [apiSearch, setApiSearch] = useState('people');
    const [searchParam, setSearchParam] = useState('');
    const [showShout, setShowShout] = useState(false);

    const selectChangeHandler = (e) => {
        setSearchParam(e.target.value);
    }

    return (
        <>
            <StyledSearch>
                <div>
                    <p>{console.log({ showShout })}</p>
                    <input type='text' placeholder='What is it now Morty?'
                        onChange={(e) => setSearchParam(e.target.value)} />

                    <button onClick={() => setShowShout(true)} className='actionButton'>WTF Morty!</button>
                    {
                        showShout && <div className='rick___shouts'>
                            <p>
                                Really? I don't give a f*ck what you think, Morty! Just Morty it up your own galaxy hole!
                                That's my new word for shitting in reverse Morty style!
                    </p>

                            <button onClick={() => setShowShout(false)}>
                                Oh jeez Rick! I.. I'm sorry!
                    </button>
                        </div>
                    }


                </div>

            </StyledSearch>
            <Characters search={searchParam} />
        </>
    );
}

export default Search;