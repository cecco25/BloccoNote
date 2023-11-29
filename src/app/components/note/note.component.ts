import { Component, EventEmitter, Input, Output, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-note', //Il selector identifica il tag html che dovete richiamare
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {

  /*Le variabili create dalla direttiva struttrale @Input
    le potete usare come attributi da inserire all'interno del tag html del componente.
    Il valore gli passate comparirà come titolo (title) o 
    descrizione (content) della nota  */
  @Input() id = '';
  @Input() title = '';
  @Input() content = '';

  /*Le variabili create dalla direttiva struttrale @Output
  possono essere usate per intercettare eventi come, in questo caso, il click della nota,
  istanziando questa classe EventEmitter*/
  @Output() noteClicked: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  // Metodo chiamato quando l'utente fa clic sulla nota
  onNoteClick() {
    // Emetti l'evento per notificare al componente genitore
    this.noteClicked.emit(this.id);
  }
}
