export interface Product { id:number; name:string; category:string; price:number; description:string; image:string; badge:string; available:boolean; }
export interface CartItem { product:Product; qty:number; extras:string[]; removed:string[]; unit:number; }
export type Payment = 'Pix'|'Cartão'|'Dinheiro';
export interface CustomerFields { name:string; phone:string; address:string; reference:string; payment:Payment; fee:number; note:string; delivery:'delivery'|'pickup'; change:string; }
export interface Order extends CustomerFields { id:number; source:'PDV'|'Cardápio'; status:number; date:string; items:CartItem[]; }
export interface DemoState { products:Product[]; categories:string[]; orders:Order[]; mine:number[]; }
export const STATUSES=['Recebido','Em preparo','Pronto','Saiu para entrega','Entregue','Cancelado'] as const;
export const EXTRAS=[{name:'Bacon extra',price:5},{name:'Cheddar extra',price:4},{name:'Blend 130g',price:8},{name:'Maionese da casa',price:3}];
export const INGREDIENTS=['Cebola','Alface','Picles','Molho'];
