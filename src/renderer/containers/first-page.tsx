import React from 'react';
import { goToNextPage } from '@/renderer/redux/actions/update';
import { AppState } from '@/renderer/store';
import { ThunkDispatch } from '@/renderer/types/redux';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';

export interface Props {
    updateAvailable: boolean;
    updateDownloaded: boolean;
    goToNextPage: () => void;
}

const FirstPage = ({ updateDownloaded, updateAvailable, goToNextPage }: Props) => {
    return (
        <div>
            <h1>First Page</h1>
            <h4>Update Available: {`${updateAvailable}`}</h4>
            <h4>Update Downloaded: {`${updateDownloaded}`}</h4>
            <button onClick={goToNextPage}> Go to Second Page</button>
        </div>
    );
};

function mapStateToProps(state: AppState) {
    return {
        updateAvailable: state.update.updateAvailable,
        updateDownloaded: state.update.updateDownloaded,
    };
}

function mapDispatchToProps(dispatch: ThunkDispatch) {
    return bindActionCreators(
        {
            goToNextPage,
        },
        dispatch,
    );
}

const enhance = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps));
export default enhance(FirstPage);
