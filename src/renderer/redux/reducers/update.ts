import {
    UpdateInitState,
    UpdateActions,
    UPDATE_DOWNLOADED,
    UPDATE_AVAILABLE,
} from '@/renderer/types/update';

const initialState: UpdateInitState = {
    updateAvailable: false,
    updateDownloaded: false,
};

export default function update(
    state: UpdateInitState = initialState,
    action: UpdateActions,
) {
    switch (action.type) {
        case UPDATE_AVAILABLE:
            return { ...state, updateAvailable: !state.updateAvailable };
        case UPDATE_DOWNLOADED:
            return { ...state, updateDownloaded: !state.updateDownloaded };
        default:
            return state;
    }
}
