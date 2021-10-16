import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Subscription } from 'rxjs';
import { NeiroNetService } from '../../services/neiro-net.service';
import { initCanvas } from '../../shared/helpers/canvas-drawer';
import { LearnSymolModel } from '../../shared/models/learn-symbol.model';
import { RecognizeTextModel } from '../../shared/models/recognize-text.model';
import { ShowResultDialogComponent } from '../../shared/show-result-dialog/show-result-dialog.component';

@Component({
  selector: 'app-add-symbols',
  templateUrl: './add-symbols.component.html',
  styleUrls: ['./add-symbols.component.scss']
})
export class AddSymbolsComponent implements OnInit, OnDestroy {

  public newValue: string = '';
  public symbolsInMemory$: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([]);

  private subs: Subscription[] = [];

  constructor(private readonly neiroNetService: NeiroNetService,
    private dialog: MatDialog) { }

  public ngOnInit(): void {
    initCanvas();
    this.initSymbolsFromMemory();
  }

  public ngOnDestroy(): void {
    this.subs.forEach(x => x.unsubscribe());
  }

  public learnNewSymbol(): void {
    const canvas: HTMLCanvasElement = document.getElementById('drawer') as HTMLCanvasElement;
    let image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    const arr = image.split(',');

    const model: LearnSymolModel = new LearnSymolModel(this.newValue, arr[1]);

    this.subs.push(this.neiroNetService.learnSymbol(model).subscribe(response => {
      this.symbolsInMemory$.next(response.literas)
      
      this.dialog.open(ShowResultDialogComponent, {
        width: '300px',
        data: {  isRecognizing: false },
        panelClass: 'show-result-custom-window'
      });

      this.newValue = '';
    }));
  }

  private initSymbolsFromMemory(): void {
    this.subs.push(this.neiroNetService.getSymbols().subscribe(response => this.symbolsInMemory$.next(response.literas)))
  }
}
