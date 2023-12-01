import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNoteHighlight]'
})
export class NoteHighlightDirective {

  constructor(private el: ElementRef) {
    this.el.nativeElement.style.boxShadow = "none";
  }

  @HostListener("mouseenter") onMouseEnter() {
    this.highlight();
  }

  private highlight() {
    var boxShadow = this.el.nativeElement.style.boxShadow;
    this.el.nativeElement.style.boxShadow = boxShadow == "none" ?
      "0px 10px 13px -7px #000000, 5px 5px 5px 2px rgba(0,198,207,0.34)" : "none";
  }

  @HostListener("mouseleave") onMouseLeave() {
    this.highlight();
  }

}
