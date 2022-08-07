import html from "../core.js";
import {connect} from "../store.js";
// const connector =connect(state=>({
//           car:state.cars[0],// dungf seclector bên kia mới được á
//           cars:state.cars

// }))
const connector =connect()
function App({cars}){//dùng destructuring lấy ra cars

// console.log(props)

          return html`
          <ul>
          ${cars.map(car=>`<li>${car}</li>`)}
          </ul>
          <button onclick='dispatch("add","Porsech")' >Add car</button>
          `
}
export default connector(App)