import { Component, OnInit } from '@angular/core';
import { NeiroNetService } from '../../services/neiro-net.service';
import { initCanvas } from '../../shared/helpers/canvas-drawer';

@Component({
  selector: 'app-add-symbols',
  templateUrl: './add-symbols.component.html',
  styleUrls: ['./add-symbols.component.scss']
})
export class AddSymbolsComponent implements OnInit {

  public newValue: string = '';

  constructor(private readonly neiroNetService: NeiroNetService) { }

  public ngOnInit(): void {
    initCanvas();
  }

  public learnNewSymbol(): void {
    this.neiroNetService.learnSymbol().subscribe(response => {
      debugger;
    });

    this.neiroNetService.recognizeText().subscribe();
  }
}
