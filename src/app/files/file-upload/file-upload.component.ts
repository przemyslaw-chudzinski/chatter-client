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
  // TODO: Dodać dodatkowe informacje takie jak canRemove, canDownload etc...
  @Output() filesUploaded = new EventEmitter<IFile[]>();
  @Output() fileRemoved = new EventEmitter<IFile>();
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

  clear(): void {
    this._files = [];
  }

  removeFile(file: IFile): void {
    event.stopPropagation();
    this._files = this._files.filter(f => f.fileId !== file.fileId);
    this.fileRemoved.emit(file);
  }

  private _pushFiles(files: IFile[]): void {
    files.forEach(file => this._files.push(file));
  }

  private _replaceFiles(files: IFile[]): void {
    this._files = files;
  }
}
