import { Action } from 'redux';
import { UpdateActions } from '@/renderer/types/update';

export type AllActions = Action<any> | Action<string> | UpdateActions;
