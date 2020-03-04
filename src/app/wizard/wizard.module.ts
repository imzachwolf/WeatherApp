import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WizardComponent } from './wizard.component';
import { GravatarComponent } from './gravatar/gravatar.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [WizardComponent, GravatarComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ]
})
export class WizardModule { }
