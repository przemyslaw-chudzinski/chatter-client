import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FileUploadComponent } from './file-upload/file-upload.component';
import {MatButtonModule, MatIconModule, MatListModule} from '@angular/material';
import { OpenFileBoxDirective } from './open-file-box.directive';
import {FilesApiService} from './files-api.service';
import {SpinnerModule} from '../ui/spinner/spinner.module';
import { FilePreviewComponent } from './file-preview/file-preview.component';
import { FilePreviewTplDirective } from './file-preview-tpl.directive';
import { FilePreviewOutletDirective } from './file-preview-outlet.directive';
import { DownloadFIleDirective } from './download-file.directive';
import {UiModule} from '../ui/ui.module';
import { ImagePreviewDialogComponent } from './dialogs/image-preview-dialog/image-preview-dialog.component';
import { FilePreviewDialogTopbarComponent } from './file-preview-dialog-topbar/file-preview-dialog-topbar.component';

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    SpinnerModule,
    MatButtonModule,
    MatIconModule,
    UiModule,
    MatListModule
  ],
  declarations: [
    FileUploadComponent,
    OpenFileBoxDirective,
    FilePreviewComponent,
    FilePreviewTplDirective,
    FilePreviewOutletDirective,
    DownloadFIleDirective,
    ImagePreviewDialogComponent,
    FilePreviewDialogTopbarComponent
  ],
  exports: [
    FileUploadComponent,
    FilePreviewComponent
  ],
  providers: [FilesApiService],
  entryComponents: [ImagePreviewDialogComponent]
})
export class FilesModule { }
