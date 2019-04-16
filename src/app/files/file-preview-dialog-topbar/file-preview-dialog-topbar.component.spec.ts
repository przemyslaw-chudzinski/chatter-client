import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilePreviewDialogTopbarComponent } from './file-preview-dialog-topbar.component';

describe('FilePreviewDialogTopbarComponent', () => {
  let component: FilePreviewDialogTopbarComponent;
  let fixture: ComponentFixture<FilePreviewDialogTopbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilePreviewDialogTopbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilePreviewDialogTopbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
