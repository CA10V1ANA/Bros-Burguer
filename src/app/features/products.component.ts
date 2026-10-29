import {Component,inject} from '@angular/core';import {Store} from '../core/store.service';import {Ui} from '../core/ui.service';import {MoneyPipe} from '../shared/money.pipe';
@Component({selector:'bros-products',imports:[MoneyPipe],templateUrl:'./products.component.html'})
export class ProductsComponent{readonly store=inject(Store);readonly ui=inject(Ui);}
