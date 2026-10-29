import {Component,inject} from '@angular/core';import {Store} from '../core/store.service';import {Ui} from '../core/ui.service';import {CatalogComponent} from '../shared/catalog.component';import {CartComponent} from '../shared/cart.component';import {MoneyPipe} from '../shared/money.pipe';
@Component({selector:'bros-terminal',imports:[CatalogComponent,CartComponent,MoneyPipe],templateUrl:'./terminal.component.html',styleUrl:'./terminal.component.scss'})
export class TerminalComponent{readonly store=inject(Store);readonly ui=inject(Ui);}
