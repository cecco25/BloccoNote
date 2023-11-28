import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

//Componenti Personalizzati
import { NoteComponent } from '../components/note/note.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  //Aggiungete nelle dichiarazioni il nome del componente sopra importato
  declarations: [HomePage, NoteComponent]
})
export class HomePageModule { }
