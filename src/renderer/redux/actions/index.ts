import { UpdateActions } from '@/renderer/types/update';
import { CallHistoryMethodAction } from 'connected-react-router';
import { DialogActions } from '@renderer/types/dialog/';

export type AllActions =
    | UpdateActions
    | DialogActions
    | CallHistoryMethodAction;
