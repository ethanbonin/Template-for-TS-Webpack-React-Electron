import Label, { HeaderVariants } from '@/renderer/types/components/label';
import Button from '@/renderer/types/components/button';

export interface ISecondPageScene {
    title: Label;
    updateAvailable: Label;
    downloadAvailable: Label;
    button: Button;
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
