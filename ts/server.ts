import { App } from "./App";
const PORT = 3300;

new App().app.listen(PORT, () => {
    console.log(`Express server listening on port: ${PORT}. ${new Date().toISOString()}`);
});
