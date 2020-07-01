import { push } from 'connected-react-router';
import { AppThunk, ThunkDispatch } from '@/renderer/types/redux';
import { UPDATE_AVAILABLE, UPDATE_DOWNLOADED } from '@renderer/types/update/';
import { routes } from '@/renderer/constants/routes';
import { ThunkExtraArguments } from '@/renderer/types/thunkExtraArguments';
import { Action, ActionCreator, Dispatch } from 'redux';
import { AppState } from '@/renderer/store';
import { ThunkAction } from 'redux-thunk';

export const toggleUpdateAvailabe: AppThunk = () => async (dispatch, _getState, extraArgument) => {
    dispatch(toggleUpdateDownloaded());
    return {
        type: UPDATE_AVAILABLE,
    };
};

export const toggleUpdateDownloaded: AppThunk = () => async (dispatch, _getState, extraArgument) => {
    const { extraAddedArgumentExample } = extraArgument;

    console.log(`Extra Argument: ${extraAddedArgumentExample}`);

    return {
        type: UPDATE_DOWNLOADED,
    };
};

// export const goToNextPage = (): AppThunk => async (dispatch, getState, _extraArgument) => {
//     dispatch(toggleUpdateAvailable());
//     return dispatch(push(routes.secondPage));
// };

export const toggleUpdateAvailable: AppThunk = () => async (dispatch) => {
    return dispatch({
        type: UPDATE_AVAILABLE,
    });
};

export const goToNextPage: AppThunk = () => async (dispatch, getState, extraArgument) => {
    const state = getState();
    const { update } = state;
    console.log('update', update);

    console.log('Extra Argument Example:', extraArgument);

    return dispatch(toggleUpdateAvailable());
};
