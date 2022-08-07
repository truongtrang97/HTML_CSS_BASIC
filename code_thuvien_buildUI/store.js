import { Creatstore } from "./core.js";
import reducer from "./reducer.js";
const {attach, connect,dispatch}=Creatstore(reducer)
window.dispatch=dispatch
export {
          attach,
          connect
}