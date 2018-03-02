export default class TheApp {
    constructor() {
        console.log("The App Lives");
    }
}

window.onload = () => {
    console.log("hello from the window");
    // tslint:disable-next-line:no-var-keyword
    var app = new TheApp();
};