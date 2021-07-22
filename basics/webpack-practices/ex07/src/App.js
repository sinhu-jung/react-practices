import content from'./hello.txt';

const App = () => {
    const app = document.createElement('h1');
    app.textContent = content.text;
    return app;
}
export { App };