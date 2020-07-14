import React from 'react';
import { goToNextPage } from '@/renderer/redux/actions/routing';
import { AppState } from '@/renderer/store';
import { ThunkDispatch } from '@/renderer/types/redux';
import { bindActionCreators, compose } from 'redux';
import { connect } from 'react-redux';
import { routes } from '@/renderer/constants/routes';
import {
    IFirstPageScene,
    FirstPageScene,
} from '@/renderer/constants/scenes/firstPageScene';
import Index from '@/renderer/components/button/button';
import Label from '@/renderer/components/label/label';

export interface Props {
    updateAvailable: boolean;
    updateDownloaded: boolean;
    goToNextPage: (page: string) => void;
    firstPageScene: IFirstPageScene;
}

const FirstPage = ({
    updateDownloaded,
    updateAvailable,
    goToNextPage,
    firstPageScene,
}: Props) => {
    return (
        <div>
            <img
                id={firstPageScene.logo.id}
                src={firstPageScene.logo.src}
                alt={firstPageScene.logo.alt}
                style={{ height: '50px' }}
            />
            <Label label={firstPageScene.title} />
            <Label
                label={firstPageScene.updateLabel}
                additionalText={`${updateAvailable}`}
            />
            <Label
                label={firstPageScene.downloadLabel}
                additionalText={`${updateDownloaded}`}
            />
            <Index
                action={() => goToNextPage(routes.secondPage)}
                buttonProperties={firstPageScene.button}
            />
        </div>
    );
};

function mapStateToProps(state: AppState) {
    return {
        updateAvailable: state.update.updateAvailable,
        updateDownloaded: state.update.updateDownloaded,
        firstPageScene: FirstPageScene,
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

const enhance = compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
);
export default enhance(FirstPage);
