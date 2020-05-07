import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private elem:ElementRef) { }
  @Input() highlightColor: string;

  @HostListener("click") onClick(){
    this.textDeco("highlight")
  }

  @HostListener("dbclick") onDoubleClick(){
    this.textDeco("None")
  }

  private textDeco(color:string){
    this.elem.nativeElement.style.backgroundColor = this.highlightColor;
  }

}
