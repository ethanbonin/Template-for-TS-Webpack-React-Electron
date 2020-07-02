import { push } from 'connected-react-router';
import { AppThunk } from '@/renderer/types/redux';
import { UPDATE_AVAILABLE, UPDATE_DOWNLOADED } from '@renderer/types/update/';
import { routes } from '@/renderer/constants/routes';

export const toggleUpdateDownloaded: AppThunk = () => async (dispatch) => {
    return dispatch({
        type: UPDATE_DOWNLOADED,
    });
};

export const toggleUpdateAvailable: AppThunk = () => async (dispatch) => {
    dispatch(toggleUpdateDownloaded());
    return dispatch({
        type: UPDATE_AVAILABLE,
    });
};

export const goToNextPage: AppThunk = () => async (dispatch, getState, extraArgument) => {
    const state = getState();
    const { update } = state;

    console.log('State Example: { update }', update);
    console.log('Extra Argument Example:', extraArgument);

    dispatch(toggleUpdateAvailable());
    dispatch(push(routes.secondPage));
};
