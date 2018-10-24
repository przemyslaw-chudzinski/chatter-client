import {Directive, Input, TemplateRef} from '@angular/core';
import {FilePreviewTemplateType} from './types/file-preview-template.type';
import {IFile} from './models/file.model';



@Directive({
  selector: '[chatterFilePreviewTpl]'
})
export class FilePreviewTplDirective {
  @Input('chatterFilePreviewTpl') filePreviewType: FilePreviewTemplateType;

  get templateRef(): TemplateRef<IFile> {
    return this._templateRef;
  }

  constructor(private _templateRef: TemplateRef<IFile>) {}
}
