import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteSymbolDialogComponent } from './write-symbol-dialog.component';

describe('WriteSymbolDialogComponent', () => {
  let component: WriteSymbolDialogComponent;
  let fixture: ComponentFixture<WriteSymbolDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WriteSymbolDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WriteSymbolDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
