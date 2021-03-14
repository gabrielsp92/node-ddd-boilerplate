const startApplication = async () => {

    const container = require('./src/container');

    const app = container.resolve('application');

    app
        .start()
        .catch((error) => {
            app.logger.error(error)
            process.exit();
        });
};

startApplication();
