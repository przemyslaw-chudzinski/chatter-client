import {Component, EventEmitter, Input, Output} from '@angular/core';
import {FilesApiService} from '../files-api.service';
import {take, tap} from 'rxjs/operators';
import {IFile} from '../models/file.model';

@Component({
  selector: 'chatter-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss']
})
export class FileUploadComponent {
  @Input() multiple: boolean;
  @Input() set files(files: IFile[]) {
    this._files = files;
  }
  @Output() filesUploaded = new EventEmitter<IFile[]>();
  private _files: IFile[] = [];

  get files(): IFile[] {
    return this._files;
  }

  constructor(
    private _filesApiService: FilesApiService
  ) {}

  handleFilesLoaded(filesList: FileList): void {
    filesList && filesList.length && this._filesApiService.uploadFiles(filesList)
      .pipe(
        take(1),
        tap(files => this.filesUploaded.emit(files)),
        tap(files => this.multiple ? this._pushFiles(files) : this._replaceFiles(files))
      )
      .subscribe();
  }

  private _pushFiles(files: IFile[]): void {
    files.forEach(file => this._files.push(file));
  }

  private _replaceFiles(files: IFile[]): void {
    this._files = files;
  }
}
