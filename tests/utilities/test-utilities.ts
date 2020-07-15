import * as electron from 'electron';
import path from 'path';
import { Application } from 'spectron';

export class TestUtils {
    public app: Application | undefined;

    public setUp(): Promise<Application> {
        // start application
        const mainBundlePath = path.join(
            __dirname,
            '..',
            '..',
            'dist',
            'main.bundle.js',
        );
        this.app = new Application({
            // path to electron app
            args: [mainBundlePath],
            path: '' + electron,
            startTimeout: 30000,
            waitTimeout: 30000,
        });
        return this.app.start();
    }

    public tearDown(): void {
        if (this.app !== undefined) {
            this.app.stop().then(() => console.log('finished closing'));
        }
    }
}
