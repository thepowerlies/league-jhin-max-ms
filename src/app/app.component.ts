import { Component } from '@angular/core';
import {Item} from './data/item.interface';
import {COMB} from './data/comb';
import {BOOTS, ITEMS} from './data/items';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  precision = "none";
  alacrity = false;

  level = 18;

  celerity = false;
  waterWalking = false;
  combinations = COMB;
  items = ITEMS;
  boots = BOOTS;
  runeAs = false;

  ghost = false;


  results: Result[] = [];
  filterBy = "ms";

  allowRighteous = false;
  allowRot = false;

  customFormula = true;


  find(){

    this.results = [];
    this.combinations.forEach(comb => {
      let items: any[] = [];
      let allow = true;
      comb.forEach(num => {
        items.push(this.items[num]);
        if((!this.allowRighteous && num === 8) || (!this.allowRot && num === 7))
          allow = false;
      });
      if(allow)
        this.boots.forEach(b => {
          this.results.push(this.calculate(b,...items));
        })
    });

    if(this.filterBy === "efficiency"){
      this.results = this.results.sort( (a,b)=> b.efficiency - a.efficiency );
    } else if (this.filterBy === "cost"){
      this.results = this.results.sort( (a,b)=> a.cost - b.cost );
    } else {
      this.results = this.results.sort( (a,b)=> b.ms - a.ms );
    }



    console.log(this.results)
  }

  calculate(...items: Item[]): Result {
    let ms = 10; // passive base ms
    let flatMs = 330;
    let as = 0;
    let cost = 0;

    items.forEach(i => {
      ms += i.movement;
      flatMs += i.flatMovement;
      as += i.as;
      cost += i.price;
    });

    if (this.precision === "fleet") // fleet foot work
      ms += 20;

    if (this.precision === "lethal") // lethal tempo
      as+= 110;

    if(this.celerity)
      ms++;


    if(this.alacrity)
      as+= 18;
    if(this.runeAs)
      as+= 10;


    if(this.waterWalking)
      flatMs+= 25;
    if(this.ghost)
      ms+= 45;



    // if(as > 245) as = 245;

    // ms+= 0.4*as;
    let total = flatMs + ms/100*flatMs;
    total += (as*0.4/100)*flatMs;
    if(this.celerity){
      total += (total - 330)* 0.07;
    }



    return {items: items, cost: cost, ms: total.toFixed(2), efficiency: (cost/total).toFixed(2), flat: flatMs, percent: ms, passive: (as*0.4*3/5 + 10)}
  }

}

interface Result {
  items: Item[];
  ms;
  cost;
  efficiency;
  flat?;
  percent?;
  passive?;
}
