const Hapi = require('@hapi/hapi');
const cors = require('cors'); // Import the cors package

const init = async () => {
    const server = Hapi.server({
        port: 3000,
        host: 'localhost',
    });

    // Register the cors middleware
    await server.register({
        plugin: cors,
        options: {
            origin: ['http://localhost:3001'], // Replace with the origin of your frontend
            methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed HTTP methods
        },
    });

    // Define your Hapi routes and other server setup here

    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
});

init();
