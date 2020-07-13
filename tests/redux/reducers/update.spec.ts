import update from '@/renderer/redux/reducers/update';
import { UPDATE_AVAILABLE, UPDATE_DOWNLOADED } from '@/renderer/types/update';

describe('update reducer', () => {
    it('should handle initial state', () => {
        const state = update(undefined, { type: UPDATE_AVAILABLE });
        const updatedState = update(state, { type: UPDATE_AVAILABLE }); // Reset it
        expect(updatedState).toMatchSnapshot();
    });

    it('should handle UPDATE_AVAILABLE', () => {
        const state = update(undefined, { type: UPDATE_AVAILABLE });
        expect(state.updateAvailable).toBe(true);

        expect(state.updateDownloaded).toBe(false);

        const updateState = update(state, { type: UPDATE_AVAILABLE });
        expect(updateState.updateAvailable).toBe(false);
    });

    it('should handle UPDATE_DOWNLOADED', () => {
        const state = update(undefined, { type: UPDATE_DOWNLOADED });
        expect(state.updateDownloaded).toBe(true);

        expect(state.updateAvailable).toBe(false);

        const updateState = update(state, { type: UPDATE_DOWNLOADED });
        expect(updateState.updateDownloaded).toBe(false);
    });
});
