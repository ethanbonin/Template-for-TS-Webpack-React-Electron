import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';
import update from '@/renderer/redux/reducers/update';

export default (history: History) =>
    combineReducers({
        router: connectRouter(history),
        update,
    });
