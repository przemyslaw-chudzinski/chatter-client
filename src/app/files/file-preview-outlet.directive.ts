import {Directive, Input, ViewContainerRef} from '@angular/core';
import {IFile} from './models/file.model';
import {FilePreviewTplDirective} from './file-preview-tpl.directive';

@Directive({
  selector: '[chatterFilePreviewOutlet]'
})
export class FilePreviewOutletDirective {
  @Input('chatterFilePreviewOutlet') file: IFile = null;
  @Input('chatterFilePreviewOutletTemplates') set templates(templates: FilePreviewTplDirective[]) {
    if (templates && templates.length && this.file && typeof this.file === 'object') {
      const tplRef = templates.find(t => this.file.mimeType.includes(t.filePreviewType)).templateRef;
      this._viewContainerRef.createEmbeddedView<IFile>(tplRef, this.context);
    }
  }

  get context(): any {
    return {
      $implicit: this.file,
      file: this.file
    };
  }

  constructor(private _viewContainerRef: ViewContainerRef) {}
}
