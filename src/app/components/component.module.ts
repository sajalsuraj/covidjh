import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { IonicModule } from '@ionic/angular';
import { HeaderComponent } from './header/header.component';
import { UpdateboxComponent } from './updatebox/updatebox.component';
import { PopoverComponent } from './popover/popover.component';

@NgModule({
  imports : [CommonModule, IonicModule],
  declarations: [HeaderComponent, UpdateboxComponent, PopoverComponent],
  exports: [HeaderComponent, UpdateboxComponent, PopoverComponent]
})
export class ComponentsModule {}
