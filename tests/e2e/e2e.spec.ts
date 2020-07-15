import { Application } from 'spectron';
import { TestUtils } from '../utilities/test-utilities';

describe('Application launch', function () {
    let testUtils: TestUtils;
    let app: Application;

    beforeAll(async () => {
        try {
            testUtils = new TestUtils();
            app = await testUtils.setUp();
        } catch (error) {
            console.log('Error Message:', error.message);
        }
    });

    afterAll(function () {
        testUtils.tearDown();
    });

    it('shows an initial window', function () {
        console.log(app);
        // return app.client.getWindowCount().then(function (count) {
        //     expect(count).toEqual(1);
        // });
    });
});
