import { Product, DemoState, Order } from './models';
export const SEED_PRODUCTS:Product[]=[
  {
    "id": 1,
    "name": "Classic Rock",
    "category": "Artesanais",
    "price": 18.9,
    "description": "Pão brioche, blend bovino 130g, mussarela, alface, cebola roxa e maionese da casa.",
    "image": "burger0.jpg",
    "badge": "O HEADLINER",
    "available": true
  },
  {
    "id": 2,
    "name": "Burguer Grunge",
    "category": "Artesanais",
    "price": 22.9,
    "description": "Blend 130g, mussarela derretida, geleia de pimenta e molho barbecue.",
    "image": "burger1.jpg",
    "badge": "",
    "available": true
  },
  {
    "id": 3,
    "name": "Hard Rock",
    "category": "Artesanais",
    "price": 26.9,
    "description": "Blend 130g, cheddar cremoso, Doritos, geleia de pimenta e alface.",
    "image": "burger2.jpg",
    "badge": "PESO PESADO",
    "available": true
  },
  {
    "id": 4,
    "name": "Heavy Metal",
    "category": "Artesanais",
    "price": 25.9,
    "description": "Blend 130g, cheddar, bacon crocante, picles e barbecue.",
    "image": "burger3.jpg",
    "badge": "",
    "available": true
  },
  {
    "id": 5,
    "name": "New Metal",
    "category": "Artesanais",
    "price": 24.9,
    "description": "Blend artesanal, cheddar, onion rings e maionese temperada.",
    "image": "burger4.jpg",
    "badge": "",
    "available": true
  },
  {
    "id": 6,
    "name": "Gonzagão",
    "category": "Artesanais",
    "price": 28.9,
    "description": "Blend bovino, carne de sol, cheddar, cebola roxa e alface.",
    "image": "burger5.jpg",
    "badge": "",
    "available": true
  },
  {
    "id": 7,
    "name": "Smash Duplo",
    "category": "Smash",
    "price": 21.9,
    "description": "Dois smash de 80g, cheddar e maionese da casa no brioche.",
    "image": "smash.jpg",
    "badge": "DOSE DUPLA",
    "available": true
  },
  {
    "id": 8,
    "name": "Box da Galera",
    "category": "Combos",
    "price": 79.9,
    "description": "Cinco Classic Rock, batata com cheddar e molho da casa para compartilhar.",
    "image": "hero.jpg",
    "badge": "A BANDA TODA",
    "available": true
  },
  {
    "id": 9,
    "name": "Onion Rings",
    "category": "Acompanhamentos",
    "price": 14.9,
    "description": "Anéis de cebola dourados e crocantes com maionese da casa.",
    "image": "rings.jpg",
    "badge": "",
    "available": true
  },
  {
    "id": 10,
    "name": "Refrigerante lata",
    "category": "Bebidas",
    "price": 7,
    "description": "Lata 350 ml gelada. Sabor escolhido na observação.",
    "image": "",
    "badge": "",
    "available": true
  }
];
export function seedState():DemoState {
 const base={phone:'85900000000',address:'Rua Exemplo, 100 — Centro',reference:'Portão azul (fictício)',payment:'Pix' as const,fee:5,note:'Pedido fictício para demonstração.',delivery:'delivery' as const,change:'',date:new Date().toISOString()};
 const orders:Order[]=[{...base,id:1041,source:'PDV',name:'Cliente Demo • Alex',status:1,items:[{product:SEED_PRODUCTS[0],qty:2,extras:[],removed:[],unit:18.9}]},{...base,id:1042,source:'Cardápio',name:'Cliente Demo • Dani',phone:'85900000001',address:'Av. Demonstração, 20',payment:'Cartão',status:3,items:[{product:SEED_PRODUCTS[3],qty:1,extras:[],removed:[],unit:25.9}]}];
 return {products:structuredClone(SEED_PRODUCTS),categories:['Artesanais','Smash','Combos','Acompanhamentos','Bebidas'],orders,mine:[]};
}
