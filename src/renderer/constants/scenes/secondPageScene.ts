import LabelProperties, {
    HeaderVariants,
} from '@/renderer/types/components/labelProperties';
import ButtonProperties from '@/renderer/types/components/buttonProperties';

export interface ISecondPageScene {
    title: LabelProperties;
    updateAvailable: LabelProperties;
    downloadAvailable: LabelProperties;
    button: ButtonProperties;
}

export const SecondPageScene: ISecondPageScene = {
    title: {
        id: 'second-page-label',
        text: 'Second Page',
        variant: HeaderVariants.h1,
    },
    updateAvailable: {
        id: 'update-label',
        text: 'Update available:',
        variant: HeaderVariants.p,
    },
    downloadAvailable: {
        id: 'download-label',
        text: 'Download available',
        variant: HeaderVariants.p,
    },
    button: {
        id: 'back-button',
        text: 'Go Back',
    },
};
