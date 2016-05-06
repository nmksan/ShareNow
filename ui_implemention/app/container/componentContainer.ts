import {Component} from 'angular2/core';
import { Observable } from 'rxjs/Rx';
import { baseComponent } from '../datamodel/baseComponent';
import { ComponentDataService } from '../datamodel/screen.service';
import {NavService} from './nav.service';
import {MenuComponent} from '../scripts/menu.component';
@Component({
    selector: 'container',
    providers:[NavService],
    directives:[MenuComponent],
    template: `<div>
                    <snmenu></snmenu>
                    <div></div>
                </div>`
})
export class componentContainer {
   componentJson:baseComponent;
    
  menuItem: string;
  subscription: any;
  constructor(private navService:NavService,private dataService : ComponentDataService) {}
  ngOnInit() {
    this.subscription = this.navService.getNavChangeEmitter()
      .subscribe(item => this.selectedNavItem(item));
  }
  selectedNavItem(item: string) {
    this.menuItem = item;
    this.dataService.ComponentData(this.menuItem).subscribe(menu => {
                this.componentJson = menu;
            });
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
 }