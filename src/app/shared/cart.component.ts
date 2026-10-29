import {Component,inject} from '@angular/core';import {Store} from '../core/store.service';import {Ui} from '../core/ui.service';import {MoneyPipe} from './money.pipe';
@Component({selector:'bros-cart',imports:[MoneyPipe],templateUrl:'./cart.component.html',styles:':host{display:block}'})
export class CartComponent{readonly store=inject(Store);readonly ui=inject(Ui);}
