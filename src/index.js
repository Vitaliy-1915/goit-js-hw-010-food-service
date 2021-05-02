// const Handlebars = require("handlebars");
// const template = Handlebars.compile("Name: {{name}}");
// console.log(template({ name: "Nils" }));

import "./sass/main.scss";

import * as ALL from "./js/theme";

import template from "./templates/main.hbs";
// console.log(Default);
import templateMenu from "./menu.json";

// window.onload = () => {
    // const Handlebars = require("handlebars");
    // const template = Handlebars.compile(Default);
    const jsMenuTemplate = document.querySelector(".js-menu");
    jsMenuTemplate.innerHTML = template(templateMenu);
    // console.log(jsMenuTemplate);
// };
    


    






