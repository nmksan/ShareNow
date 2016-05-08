import {Component} from 'angular2/core';
import { Observable } from 'rxjs/Rx';
import { baseComponent } from '../datamodel/baseComponent';
import { ComponentDataService } from '../datamodel/screen.service';
import {NavService} from './nav.service';
import {MenuComponent} from '../scripts/menu.component';
import {PayScreen} from '../screens/pay.screen';
import {CreateGroupScreen} from '../screens/creategroup.screen';
import {ShareAmountScreen} from '../screens/shareamount.screen'
import {ReportScreen} from '../screens/report.screen';

@Component({
    selector: 'container',
    providers:[NavService],
    directives:[MenuComponent,PayScreen,CreateGroupScreen,ShareAmountScreen,ReportScreen],
    template: `<div>
                    <snmenu></snmenu>
                    <div id="component_container" ></div>
                    <pay *ngIf="isScreen('Pay')"></pay>
                    <creategroup *ngIf="isScreen('creategroup')"></creategroup>
                    <shareamount *ngIf="isScreen('shareamount')"></shareamount>
                    <report *ngIf="isScreen('report')"></report>
                </div>`
})
export class componentContainer {
   componentJson:baseComponent;
    
  menuItem: string="creategroup";
  subscription: any;
  constructor(private navService:NavService,private dataService : ComponentDataService) {}
  ngOnInit() {
    this.subscription = this.navService.getNavChangeEmitter()
      .subscribe(item => this.selectedNavItem(item));
  }
  isScreen(screen){
    if(screen == this.menuItem){return true;}else return false;
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