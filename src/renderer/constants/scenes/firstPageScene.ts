/** Components */
import Image from '@/renderer/types/components/image';
import LabelProperties, {
    HeaderVariants,
} from '@/renderer/types/components/labelProperties';
import ButtonProperties from '@/renderer/types/components/buttonProperties';

/** Resources */
import imImage from '@/renderer/resources/incept-logo-blue-text.png';

export interface IFirstPageScene {
    logo: Image;
    title: LabelProperties;
    updateLabel: LabelProperties;
    downloadLabel: LabelProperties;
    button: ButtonProperties;
}

export const FirstPageScene: IFirstPageScene = {
    logo: {
        id: 'logo',
        src: imImage,
        alt: 'Incept Logo',
    },
    title: {
        id: 'first-page-title',
        text: 'First Page',
        variant: HeaderVariants.h1,
    },
    updateLabel: {
        id: 'update-label',
        text: 'Update available:',
        variant: HeaderVariants.p,
    },
    downloadLabel: {
        id: 'download-label',
        text: 'Download available:',
        variant: HeaderVariants.p,
    },
    button: {
        id: 'next-page-button',
        text: 'Go to second Page',
    },
};
