import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { NeiroNetService } from '../../services/neiro-net.service';
import { initCanvas } from '../../shared/helpers/canvas-drawer';
import { LearnSymolModel } from '../../shared/models/learn-symbol.model';
import { RecognizeTextModel } from '../../shared/models/recognize-text.model';

@Component({
  selector: 'app-add-symbols',
  templateUrl: './add-symbols.component.html',
  styleUrls: ['./add-symbols.component.scss']
})
export class AddSymbolsComponent implements OnInit {

  public newValue: string = '';
  private subs: Subscription[] = [];

  constructor(private readonly neiroNetService: NeiroNetService) { }

  public ngOnInit(): void {
    initCanvas();
  }

  public learnNewSymbol(): void {
    const canvas: HTMLCanvasElement = document.getElementById('drawer') as HTMLCanvasElement;
    let image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
    const arr = image.split(',');

    const model: LearnSymolModel = new LearnSymolModel(this.newValue, arr[1]);

    this.neiroNetService.learnSymbol(model).subscribe(response => {
      debugger;
    });
  }
}
