import {Pipe,PipeTransform} from '@angular/core';
@Pipe({name:'money'}) export class MoneyPipe implements PipeTransform{transform(value:number):string{return value.toLocaleString('pt-BR',{style:'currency',currency:'BRL'});}}
