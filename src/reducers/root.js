import INITIAL_STATE from './default.state';
import { CHAR_INIT } from '../constants/action.constants';

const rootReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case CHAR_INIT:
            const { characters, next, pages, prev } = action.payload;

            return Object.assign({}, state, {
                characters: [
                    ...characters
                ],
                pages: pages,
                next: next,
                prev: prev

            })
            break;



        default:
            return state;
            break;
    }
}

export default rootReducer;