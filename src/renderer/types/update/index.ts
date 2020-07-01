export interface UpdateInitState {
    updateAvailable: boolean;
    updateDownloaded: boolean;
}

export const UPDATE_AVAILABLE = 'UPDATE_AVAILABLE';
export const UPDATE_DOWNLOADED = 'UPDATE_DOWNLOADED';

export interface SetUpdateAvailable {
    type: typeof UPDATE_AVAILABLE;
}

export interface SetUpdateDownloaded {
    type: typeof UPDATE_DOWNLOADED;
}

export type UpdateActions = SetUpdateAvailable | SetUpdateDownloaded;
