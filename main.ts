class Website {
    title: string;

    constructor(title: string) {
        this.title = title;
    }

    render() {
        console.log(this.title);
        document.write(`<h1>${this.title}</h1>`);
    }
}

const myWebsite = new Website("My TEST");
myWebsite.render();
