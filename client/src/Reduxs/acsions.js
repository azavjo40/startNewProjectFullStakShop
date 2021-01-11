import { CREATE_BESKAT } from "./types";

export function createBeskat(beskat){
return{
type: CREATE_BESKAT,
payload: beskat
}
}