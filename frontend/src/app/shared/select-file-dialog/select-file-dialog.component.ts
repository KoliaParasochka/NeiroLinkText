import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NeiroNetService } from '../../services/neiro-net.service';

@Component({
  selector: 'app-select-file-dialog',
  templateUrl: './select-file-dialog.component.html',
  styleUrls: ['./select-file-dialog.component.scss']
})
export class SelectFileDialogComponent implements OnInit, OnDestroy {

  public selectedFileName: string = 'Select picture';
  public hasExtentionError: boolean = false;

  private formData: FormData = new FormData();
  private subs: Subscription[] = [];

  constructor(private neiroNetService: NeiroNetService) { }

  public ngOnInit(): void { }

  public ngOnDestroy(): void {
    this.subs.forEach(x => x.unsubscribe());
  }

  public onFileSelected(event): void {
    let file = event.target.files[0];
    this.selectedFileName = file.name;
    let extention: string = this.getFileExtention(file.name).trim();

    this.hasExtentionError = !(extention == 'jpg' || extention == 'jpeg' || extention == 'png');

    this.formData.append('file', file);
  }

  public getFileExtention(fileName: string): string {
    const array = fileName.split('.');
    return array[(array.length - 1)];
  }

  public onUploadImgBtnClick(): void {
    //this.subs.push(this.neiroNetService.recognizeText())
  }
}
