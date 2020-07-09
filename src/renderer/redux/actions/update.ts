import { push } from 'connected-react-router';
import { AppThunk } from '@/renderer/types/redux';
import { UPDATE_AVAILABLE, UPDATE_DOWNLOADED } from '@renderer/types/update/';
import { routes } from '@/renderer/constants/routes';
import { showDialog } from '@/renderer/redux/actions/dialog';
import { DialogBoxType, DialogProperties } from '@renderer/types/dialog/';
import ipcEvents from '@/renderer/constants/ipcEvents';
import { ipcRenderer } from 'electron';

export const updateAvailable: AppThunk = () => async (dispatch) => {
    const dialogOptions: DialogProperties = {
        type: DialogBoxType.info,
        title: 'Update Available',
        defaultId: 0,
        buttons: ['Awesome'],
        message: 'New update is available',
        detail: 'Update downloading in background',
    };

    showDialog(dialogOptions, (response) => {
        console.log(response.response);
    });

    return dispatch({
        type: UPDATE_AVAILABLE,
    });
};

export const updateDownloaded: AppThunk = () => async (dispatch) => {
    const dialogOptions: DialogProperties = {
        type: DialogBoxType.question,
        title: 'Update Downloaded',
        defaultId: 0,
        buttons: ['Restart App', 'Later'],
        message: 'New update finished downloading. Restart App?',
        detail:
            'You will need to restart the app to get the new update. Restart now?',
    };

    showDialog(dialogOptions, (response) => {
        if (response.response === 0) {
            console.log('restart app!');
            ipcRenderer.send(ipcEvents.main.restart_app);
        }
    });

    return dispatch({
        type: UPDATE_DOWNLOADED,
    });
};

export const goToNextPage: AppThunk = () => async (
    dispatch,
    getState,
    extraArgument,
) => {
    const state = getState();
    const { update } = state;

    console.log('State Example: { update }', update);
    console.log('Extra Argument Example:', extraArgument);

    dispatch(updateAvailable());
    dispatch(push(routes.secondPage));
};
