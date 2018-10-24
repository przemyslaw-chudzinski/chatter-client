import {AfterViewInit, Component, Input, QueryList, ViewChildren} from '@angular/core';
import {IFile} from '../models/file.model';
import {FilePreviewTplDirective} from '../file-preview-tpl.directive';

@Component({
  selector: 'chatter-file-preview',
  templateUrl: './file-preview.component.html',
  styleUrls: ['./file-preview.component.scss']
})
export class FilePreviewComponent implements AfterViewInit {
  @Input() file: IFile;
  @ViewChildren(FilePreviewTplDirective, {read: FilePreviewTplDirective}) private _previewTemplates = new QueryList<FilePreviewTplDirective>();
  private _templates: FilePreviewTplDirective[] = null;

  get templates(): FilePreviewTplDirective[] {
    return this._templates;
  }

  ngAfterViewInit() {
    this.file && setTimeout(() => this._templates = this._previewTemplates.toArray());
  }
}
