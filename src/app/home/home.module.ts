import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { HomePageRoutingModule } from './home-routing.module';

//Componenti e Direttive Personalizzati
import { NoteComponent } from '../components/note/note.component';
import { NoteHighlightDirective } from '../directives/note-highlight.directive';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
  ],
  //Aggiungete nelle dichiarazioni il nome del componente o direttiva sopra importato
  declarations: [HomePage, NoteComponent, NoteHighlightDirective]
})
export class HomePageModule { }
