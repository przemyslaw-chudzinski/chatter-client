import {Directive, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, Renderer2} from '@angular/core';

@Directive({
  selector: '[chatterOpenFileBox]'
})
export class OpenFileBoxDirective implements OnInit {
  @Input() multiple: boolean;

  @Output() filesLoaded = new EventEmitter<FileList>();

  private _fileUploadInputElem: HTMLInputElement;

  constructor(
    private _renderer: Renderer2,
    private _elemRef: ElementRef
  ) {}

  ngOnInit() {
    !this._fileUploadInputElem && this._createFileUploadInput();
  }

  private _createFileUploadInput(): void {
    this._fileUploadInputElem = this._createInput();
    this._renderer.appendChild(this._elemRef.nativeElement, this._fileUploadInputElem);
  }

  private _createInput(): HTMLInputElement {
    const fileUploadInput = document.createElement('input');
    fileUploadInput.type = 'file';
    fileUploadInput.hidden = true;
    fileUploadInput.multiple = this.multiple;
    fileUploadInput.classList.add('file-upload-input');
    return fileUploadInput;
  }

  @HostListener('click')
  handleClick(): void {
    this._fileUploadInputElem.click();
  }

  @HostListener('change', ['$event'])
  handleChange(event): void {
    event.target.files && event.target.files.length && this.filesLoaded.emit(event.target.files);
  }

}
