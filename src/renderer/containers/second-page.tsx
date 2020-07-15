import React from 'react';
import { AppState } from '@/renderer/store';
import { ThunkDispatch } from '@/renderer/types/redux';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { routes } from '@/renderer/constants/routes';
import {
    ISecondPageScene,
    SecondPageScene,
} from '@/renderer/constants/scenes/secondPageScene';
import Header from '@/renderer/components/label/label';

export interface Props {
    updateAvailable: boolean;
    updateDownloaded: boolean;
    secondPageScene: ISecondPageScene;
}

const SecondPage = ({
    updateDownloaded,
    updateAvailable,
    secondPageScene,
}: Props) => {
    return (
        <div>
            <Header label={secondPageScene.title} />
            <Header
                label={secondPageScene.updateAvailable}
                additionalText={`${updateAvailable}`}
            />
            <Header
                label={secondPageScene.downloadAvailable}
                additionalText={`${updateDownloaded}`}
            />
            <Link to={routes.index}>Go Back</Link>
        </div>
    );
};

function mapStateToProps(state: AppState) {
    return {
        updateAvailable: state.update.updateAvailable,
        updateDownloaded: state.update.updateDownloaded,
        secondPageScene: SecondPageScene,
    };
}

function mapDispatchToProps(dispatch: ThunkDispatch) {
    return bindActionCreators({}, dispatch);
}

const enhance = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
);
export default enhance(SecondPage);
