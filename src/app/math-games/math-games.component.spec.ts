import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MathGamesComponent } from './math-games.component';

describe('MathGamesComponent', () => {
  let component: MathGamesComponent;
  let fixture: ComponentFixture<MathGamesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MathGamesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MathGamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
