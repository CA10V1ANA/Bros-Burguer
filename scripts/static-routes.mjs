import {mkdirSync, copyFileSync} from 'node:fs';
// Entradas estáticas para hosts que não reescrevem rotas de SPA.
for (const route of ['admin','admin/login','admin/dashboard','admin/novo-pedido','admin/pedidos','admin/produtos','admin/clientes']) {
 mkdirSync(`dist/${route}`,{recursive:true});copyFileSync('dist/index.html',`dist/${route}/index.html`);
}
