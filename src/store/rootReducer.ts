import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { reducer } from '../ducks/reducer';

const rootReducer = (history: any) =>
    combineReducers({
        router: connectRouter(history),
        portfolioData: reducer
    });

export default rootReducer;
