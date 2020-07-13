import { spy } from 'sinon';
import * as actions from '@/renderer/redux/actions/update';

describe('update actions', () => {
    it('should updateAvailable', () => {
        const fn = actions.updateAvailable();
        expect(fn).toBeInstanceOf(Function);
        const dispatch = spy();

        fn(dispatch, () => undefined, undefined);
        expect(dispatch.calledWith()).toBe(true);
        // expect(actions.updateAvailable()).toMatchSnapshot();
    });

    // it('should updateDownloaded should create setDialog action', () => {
    //     const fn = actions.updateDownloaded();
    //     expect(fn).toBeInstanceOf(Function);
    //     const dispatch = spy();
    //     fn(dispatch);
    //     expect(dispatch.calledWith()).toBe(true);
    //     expect(actions.updateDownloaded()).toMatchSnapshot();
    // });
});
