import { useDispatch, useSelector } from "react-redux";
import { CHAR_INIT } from "../../constants/action.constants";

const Pagination = () => {
    const { next, pages, prev } = useSelector(state => state)
    const dispatch = useDispatch();
    console.log({ next, pages, prev });

    const currentPage = next.trim() !== '' ? next.substr(next.indexOf("=") + 1, next.length - 1) - 1 : 'loading';

    async function fetchCharacters(url) {
        const results = await (await fetch(url)).json();
        console.log(results);
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
        <>
            {
                prev && <button onClick={() => fetchCharacters(prev)}>
                    <ion-icon name="chevron-back-circle-outline"></ion-icon>
                </button>
            }
            <p>
                Page {currentPage} of {pages}
            </p>
            {
                next && <button onClick={() => fetchCharacters(next)}>
                    <ion-icon name="chevron-forward-circle-outline"></ion-icon>
                </button>
            }
        </>
    );
}

export default Pagination;