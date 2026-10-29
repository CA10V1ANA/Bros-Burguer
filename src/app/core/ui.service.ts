import {Injectable,signal} from '@angular/core';
import {Product} from './models';
export type ModalState={kind:'product';product:Product}|{kind:'cart'}|{kind:'checkout'}|{kind:'tracking'}|{kind:'order';id:number;created?:boolean}|{kind:'edit';product?:Product}|{kind:'category'}|{kind:'history';phone:string;name:string};
@Injectable({providedIn:'root'})
export class Ui {readonly modal=signal<ModalState|null>(null);open(value:ModalState){this.modal.set(value);}close(){this.modal.set(null);}}
