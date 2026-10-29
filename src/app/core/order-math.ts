import type { CartItem } from './models.ts';
export const roundMoney=(n:number)=>Math.round((n+Number.EPSILON)*100)/100;
export function subtotal(items:CartItem[]):number{return roundMoney(items.reduce((sum,item)=>sum+item.unit*item.qty,0));}
export function payable(items:CartItem[],fee:number):number{return roundMoney(subtotal(items)+fee);}
export function unitPrice(base:number,extras:{price:number}[]):number{return roundMoney(base+extras.reduce((n,e)=>n+e.price,0));}
