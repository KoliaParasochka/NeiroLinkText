import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSymbolsComponent } from './add-symbols.component';

describe('AddSymbolsComponent', () => {
  let component: AddSymbolsComponent;
  let fixture: ComponentFixture<AddSymbolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSymbolsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSymbolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
