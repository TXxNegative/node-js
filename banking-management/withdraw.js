import { current } from "./total.js";
function withdraw(withd){
    tot=current-withd
    return tot
}
export {withdraw}