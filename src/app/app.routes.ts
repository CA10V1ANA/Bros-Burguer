import {inject} from '@angular/core';import {CanActivateFn,Router,Routes} from '@angular/router';import {Store} from './core/store.service';
// Guard de navegação da demonstração. NÃO substitui autenticação e autorização no backend.
const demoGuard:CanActivateFn=(_route,state)=>inject(Store).adminSession()||inject(Router).createUrlTree(['/admin/login'],{queryParams:{returnUrl:state.url}});
export const routes:Routes=[
 {path:'',pathMatch:'full',loadComponent:()=>import('./features/customer.component').then(m=>m.CustomerComponent)},
 {path:'admin/login',loadComponent:()=>import('./features/login.component').then(m=>m.LoginComponent)},
 {path:'admin',canActivate:[demoGuard],loadComponent:()=>import('./features/admin.component').then(m=>m.AdminComponent),children:[
  {path:'',pathMatch:'full',redirectTo:'novo-pedido'},
  {path:'dashboard',loadComponent:()=>import('./features/dashboard.component').then(m=>m.DashboardComponent)},
  {path:'novo-pedido',loadComponent:()=>import('./features/terminal.component').then(m=>m.TerminalComponent)},
  {path:'pedidos',loadComponent:()=>import('./features/orders.component').then(m=>m.OrdersComponent)},
  {path:'produtos',loadComponent:()=>import('./features/products.component').then(m=>m.ProductsComponent)},
  {path:'clientes',loadComponent:()=>import('./features/clients.component').then(m=>m.ClientsComponent)}
 ]},{path:'**',redirectTo:''}
];
