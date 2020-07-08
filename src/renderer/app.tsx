import React from 'react';
import routes from '@/renderer/routes';
import { connect } from 'react-redux';
import { AppState } from '@/renderer/store';
import { ThunkDispatch } from '@/renderer/types/redux';
import { bindActionCreators, compose } from 'redux';
import { updateAvailable, updateDownloaded } from '@/renderer/redux/actions/update';
import { ipcRenderer } from 'electron';
import ipcEvents from '@/renderer/constants/ipcEvents';

export interface AppProps {
    updateAvailable: typeof updateAvailable;
    updateDownloaded: typeof updateDownloaded;
}

const App = (props: AppProps) => {
    ipcRenderer.on(ipcEvents.renderer.update_available, props.updateAvailable);

    ipcRenderer.on(ipcEvents.renderer.update_downloaded, props.updateDownloaded);

    return <>{routes}</>;
};

function mapStateToProps(state: AppState) {
    return {};
}

function mapDispatchToProps(dispatch: ThunkDispatch) {
    return bindActionCreators(
        {
            updateAvailable,
            updateDownloaded,
        },
        dispatch,
    );
}

const enhance = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps));
export default enhance(App);
