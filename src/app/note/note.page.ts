import { Component, Input, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.page.html',
  styleUrls: ['./note.page.scss'],
})
export class NotePage implements OnInit {
  private route = inject(ActivatedRoute);
  noteId: any = "";

  constructor() { }

  ngOnInit() {
    this.noteId = this.route.snapshot.paramMap.get('id');
    console.log(this.noteId)
  }
}
