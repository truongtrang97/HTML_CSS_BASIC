// import html from './core.js'


// const cars =['BMW','Porsche','Mercedes']
// const issuccess =false
// const output= html`
// <h1>${issuccess && 'Thanh cong'}</h1>
// <ul>
// ${cars.map(car=>`<li>${car}</li>`)}
// </ul>
// `
// console.log(output)
import App from "./component/app.js";
import { attach } from "./store.js";

attach(App,document.querySelector('#app'))