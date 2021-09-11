import { Component, OnInit } from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-dialog',
  templateUrl: './language-dialog.component.html',
  styleUrls: ['./language-dialog.component.scss']
})
export class LanguageDialogComponent implements OnInit {
  public lang: string = 'en';

  constructor(private translateService: TranslateService) { }

  public ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en';
  }

  public onChangeLanguage(event: MatSelectChange) {
    localStorage.setItem('lang', event.value);
    this.translateService.use(event.value);
  }
}
