import { AppThunk } from '@/renderer/types/redux';
import { DialogProperties, SHOW_DIALOG } from '@renderer/types/dialog/';
import { MessageBoxOptions, MessageBoxReturnValue } from 'electron';

export const showDialog = (
    dialogOptions: DialogProperties,
    callBack: (response: MessageBoxReturnValue) => void,
) => {
    if (process.env.NODE_ENV !== 'unit') {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const { dialog } = require('electron').remote;

        const options: MessageBoxOptions = { ...dialogOptions };
        if (!dialog) {
            dialog
                .showMessageBox(options)
                .then((response: MessageBoxReturnValue) => {
                    callBack(response);
                });
        }
    }
};
