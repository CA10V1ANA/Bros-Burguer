import {test} from 'node:test';
import assert from 'node:assert/strict';
import {subtotal,payable,unitPrice} from './order-math.ts';
import type {CartItem} from './models.ts';
test('adicionais, quantidades e taxa mantêm centavos exatos',()=>{
 const items=[{unit:unitPrice(18.9,[{price:5}]),qty:3},{unit:7,qty:2}] as CartItem[];
 assert.equal(subtotal(items),85.7);assert.equal(payable(items,5),90.7);assert.equal(payable(items,0),85.7);
});
test('carrinho vazio e preços com centavos não acumulam erro decimal',()=>{assert.equal(subtotal([]),0);assert.equal(subtotal([{unit:.1,qty:3}] as CartItem[]),.3);});
