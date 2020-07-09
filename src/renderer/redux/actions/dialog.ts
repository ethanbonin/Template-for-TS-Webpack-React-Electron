import { AppThunk } from '@/renderer/types/redux';
import { DialogProperties, SHOW_DIALOG } from '@renderer/types/dialog/';
import { MessageBoxOptions, MessageBoxReturnValue } from 'electron';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const { dialog } = require('electron').remote;

export const showDialog = (
    dialogOptions: DialogProperties,
    callBack: (response: MessageBoxReturnValue) => void,
) => {
    // Set the dialog properties first

    const options: MessageBoxOptions = { ...dialogOptions };
    console.log('Callign this!');
    dialog.showMessageBox(options).then((response: MessageBoxReturnValue) => {
        callBack(response);
    });
};

export const setDialogProperties: AppThunk = (
    dialogOptions: DialogProperties,
) => async (dispatch) => {
    return dispatch({
        type: SHOW_DIALOG,
        dialogProperties: dialogOptions,
    });
};
