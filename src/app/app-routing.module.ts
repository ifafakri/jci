import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnnuaireComponent } from './annuaire/annuaire.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [{path:'',component:HomeComponent },{path:'home',component:HomeComponent},{path:'contact',component:ContactComponent},{path:'annuaire',component:AnnuaireComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
