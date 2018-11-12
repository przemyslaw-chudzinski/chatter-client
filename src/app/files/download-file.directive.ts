import {Directive, HostListener, Input} from '@angular/core';

@Directive({
  selector: '[chatterDownloadFIle]'
})
export class DownloadFIleDirective {
  @Input() fileUrl: string;
  constructor() { }

  @HostListener('click', ['$event'])
  handleClick(event: MouseEvent): void {
    event.preventDefault();
    event.stopPropagation();
    this._createLink().click();
  }

  private _createLink(): HTMLAnchorElement {
    const link = document.createElement('a');
    link.href = this.fileUrl;
    link.target = '_blank';
    link.download = '';
    console.log(link);
    return link;
  }
}
