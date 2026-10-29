import {Component,inject} from '@angular/core';import {RouterOutlet} from '@angular/router';import {Store} from './core/store.service';import {ModalComponent} from './shared/modal.component';
@Component({selector:'bros-app',imports:[RouterOutlet,ModalComponent],template:`<div class="demo">⚡ EXPERIÊNCIA DEMONSTRATIVA <span>Produtos e valores ilustrativos · pedidos salvos neste navegador</span></div><router-outlet/><bros-modal/><div id="toast" role="status" aria-live="polite" [class.show]="!!store.toast()">{{store.toast()}}</div>`})
export class AppComponent{readonly store=inject(Store);}
