import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-note', //Il selector identifica il tag html che dovete richiamare
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss'],
})
export class NoteComponent implements OnInit {
  @Input() title = '';
  @Input() content = '';

  constructor() { }

  ngOnInit() { }

}
