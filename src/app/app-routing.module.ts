import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {WizardComponent} from './wizard/wizard.component';
import {PreviewComponent} from './preview/preview.component';

const routes: Routes = [
  // { path: 'heroes', component: HeroesComponent }
  {path: '', component: WizardComponent},
  {path: 'preview', component: PreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
