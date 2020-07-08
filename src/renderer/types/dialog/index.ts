export enum DialogBoxType {
    none = 'none',
    info = 'info',
    error = 'error',
    question = 'question',
    warning = 'warning',
}

export interface DialogProperties {
    type: DialogBoxType;
    buttons?: string[];
    defaultId?: number;
    title?: string;
    message: string;
    detail?: string;
    checkboxLabel?: string;
    checkboxChecked?: boolean;
}

export interface DialogInitState {
    dialogProperties: DialogProperties;
}

export const SHOW_DIALOG = 'SHOW_DIALOG';

export interface ShowDialog {
    type: typeof SHOW_DIALOG;
    dialogProperties: DialogProperties;
}

export type DialogActions = ShowDialog;
