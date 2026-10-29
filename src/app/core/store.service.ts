import {Injectable,computed,signal} from '@angular/core';
import {CartItem,CustomerFields,DemoState,Order,Product} from './models';
import {seedState} from './seed';
import {subtotal,unitPrice} from './order-math';
const KEY='bros-demo-v1';
@Injectable({providedIn:'root'})
export class Store {
 readonly state=signal<DemoState>(this.restore());
 readonly products=computed(()=>this.state().products);readonly categories=computed(()=>this.state().categories);readonly orders=computed(()=>this.state().orders);
 readonly cart=signal<CartItem[]>([]);readonly cartTotal=computed(()=>subtotal(this.cart()));readonly cartCount=computed(()=>this.cart().reduce((s,x)=>s+x.qty,0));
 readonly myOrders=computed(()=>this.orders().filter(o=>this.state().mine.includes(o.id)));
 readonly customers=computed(()=>[...new Map([...this.orders()].reverse().map(o=>[o.phone,o])).values()]);
 readonly toast=signal('');private timer:ReturnType<typeof setTimeout>|undefined;
 readonly adminSession=signal(sessionStorage.getItem('bros-admin-demo')==='yes');
 constructor(){window.addEventListener('storage',e=>{if(e.key===KEY)this.state.set(this.restore())});}
 private restore():DemoState{try{const value=JSON.parse(localStorage.getItem(KEY)||'null') as DemoState|null;if(value&&Array.isArray(value.products)&&Array.isArray(value.orders)&&Array.isArray(value.categories)&&Array.isArray(value.mine))return value;}catch{}return seedState();}
 private commit(state:DemoState){this.state.set(state);try{localStorage.setItem(KEY,JSON.stringify(state));}catch{this.notify('Armazenamento indisponível. Dados mantidos nesta sessão.');}}
 notify(message:string){this.toast.set(message);clearTimeout(this.timer);this.timer=setTimeout(()=>this.toast.set(''),2800);}
 enterDemo(){sessionStorage.setItem('bros-admin-demo','yes');this.adminSession.set(true);}
 logout(){sessionStorage.removeItem('bros-admin-demo');this.adminSession.set(false);}
 add(product:Product,qty:number,extras:{name:string;price:number}[],removed:string[]){this.cart.update(list=>[...list,{product:structuredClone(product),qty,extras:extras.map(e=>e.name),removed,unit:unitPrice(product.price,extras)}]);this.notify('⚡ Adicionado. Esse show é seu!');}
 quantity(index:number,change:number){this.cart.update(list=>list.map((item,i)=>i===index?{...item,qty:Math.min(50,item.qty+change)}:item).filter(x=>x.qty>0));}
 createOrder(fields:CustomerFields,source:Order['source']):Order{if(!this.cart().length)throw new Error('Sacola vazia');const order:Order={...fields,id:Math.max(1042,...this.orders().map(o=>o.id))+1,source,status:0,date:new Date().toISOString(),items:structuredClone(this.cart())};const s=this.state();this.commit({...s,orders:[order,...s.orders],mine:source==='Cardápio'?[order.id,...s.mine]:s.mine});this.cart.set([]);return order;}
 setStatus(id:number,status:number){if(status<0||status>5)return;this.commit({...this.state(),orders:this.orders().map(o=>o.id===id?{...o,status}:o)});this.notify('Status do pedido atualizado');}
 saveProduct(value:Omit<Product,'id'>,id?:number){const products=id?this.products().map(p=>p.id===id?{...value,id}:p):[...this.products(),{...value,id:Math.max(0,...this.products().map(p=>p.id))+1}];this.commit({...this.state(),products});this.notify('Produto salvo e cardápio atualizado');}
 toggleProduct(id:number){this.commit({...this.state(),products:this.products().map(p=>p.id===id?{...p,available:!p.available}:p)});this.notify('Disponibilidade atualizada');}
 addCategory(name:string):boolean{name=name.trim();if(!name)return false;if(this.categories().some(c=>c.toLowerCase()===name.toLowerCase())){this.notify('Essa categoria já existe');return false;}this.commit({...this.state(),categories:[...this.categories(),name]});this.notify('Categoria adicionada');return true;}
}
