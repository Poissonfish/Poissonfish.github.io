var Website = /** @class */ (function () {
    function Website(title) {
        this.title = title;
    }
    Website.prototype.render = function () {
        console.log(this.title);
        document.write("<h1>".concat(this.title, "</h1>"));
    };
    return Website;
}());
var myWebsite = new Website("My Websaaaite");
myWebsite.render();
