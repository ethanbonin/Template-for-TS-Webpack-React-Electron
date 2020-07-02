import React from 'react';
import { AppState } from '@/renderer/store';
import { ThunkDispatch } from '@/renderer/types/redux';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { routes } from '@/renderer/constants/routes';

export interface Props {
    updateAvailable: boolean;
    updateDownloaded: boolean;
}

const SecondPage = ({ updateDownloaded, updateAvailable }: Props) => {
    console.log('test', updateDownloaded, updateAvailable);
    return (
        <div>
            <h1>Second Page</h1>
            <h4>Update Available: {`${updateAvailable}`}</h4>
            <h4>Update Downloaded: {`${updateDownloaded}`}</h4>
            <Link to={routes.index}>Go Back</Link>
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
    return bindActionCreators({}, dispatch);
}

const enhance = compose<React.ComponentType>(connect(mapStateToProps, mapDispatchToProps));
export default enhance(SecondPage);
