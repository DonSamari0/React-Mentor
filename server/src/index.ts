import server from './server';

async function main() {
    await server.listen(process.env.PORT || 5000, () => {
        // eslint-disable-next-line no-console
        console.log(`Running server - http://localhost:${process.env.PORT}`);
    });
}
main();
