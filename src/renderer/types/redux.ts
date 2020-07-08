import { ThunkAction, ThunkDispatch as TD } from 'redux-thunk';
import { AppState } from '@/renderer/store';
import { AllActions } from '@renderer/redux/actions/';
import { ThunkExtraArguments } from '@/renderer/types/thunkExtraArguments';
import { ActionCreator } from 'redux';

export type AppThunk = ActionCreator<
    ThunkAction<Promise<void> | Promise<AllActions>, AppState, ThunkExtraArguments, AllActions>
>;
export type ThunkDispatch = TD<AppState, ThunkExtraArguments, AllActions>;
