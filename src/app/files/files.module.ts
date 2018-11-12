import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {MatButtonModule, MatIconModule} from '@angular/material';
import { OpenFileBoxDirective } from './open-file-box.directive';
import {FilesApiService} from './files-api.service';
import {SpinnerModule} from '../ui/spinner/spinner.module';
import { FilePreviewComponent } from './file-preview/file-preview.component';
import { FilePreviewTplDirective } from './file-preview-tpl.directive';
import { FilePreviewOutletDirective } from './file-preview-outlet.directive';
import { DownloadFIleDirective } from './download-file.directive';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    SpinnerModule,
    MatButtonModule,
    MatIconModule
  ],
  declarations: [
    FileUploadComponent,
    OpenFileBoxDirective,
    FilePreviewComponent,
    FilePreviewTplDirective,
    FilePreviewOutletDirective,
    DownloadFIleDirective
  ],
  exports: [
    FileUploadComponent
  ],
  providers: [FilesApiService]
})
export class FilesModule { }
