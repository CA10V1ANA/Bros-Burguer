import {Component,computed,inject,signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {Store} from '../core/store.service';import {Ui} from '../core/ui.service';import {MoneyPipe} from './money.pipe';
@Component({selector:'bros-catalog',imports:[FormsModule,MoneyPipe],templateUrl:'./catalog.component.html',styleUrl:'./catalog.component.scss'})
export class CatalogComponent {readonly store=inject(Store);readonly ui=inject(Ui);readonly category=signal('Todos');readonly search=signal('');readonly filtered=computed(()=>this.store.products().filter(p=>p.available&&(this.category()==='Todos'||p.category===this.category())&&`${p.name} ${p.description}`.toLocaleLowerCase().includes(this.search().toLocaleLowerCase())));}
