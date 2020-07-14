import { push, goBack } from 'connected-react-router';
import { AppThunk } from '@/renderer/types/redux';

export const goToNextPage: AppThunk = (page: string) => async (
    dispatch,
    getState,
    extraArgument,
) => {
    const state = getState();
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const { update } = state;

    console.log('State Example: { update }', update);
    console.log('Extra Argument Example:', extraArgument);
    dispatch(push(page));
};

export const goBackToPreviousPage: AppThunk = () => async (dispatch) =>
    dispatch(goBack());
