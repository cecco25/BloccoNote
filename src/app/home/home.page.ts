import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  numeroNote = [1, 2, 3, 4, 5];

  constructor() { }

  handleNoteClick(noteID: any) {
    // Gestisci l'evento di clic della nota qui
    console.log('Nota cliccata nel componente padre! id: ', noteID);
  }
}
