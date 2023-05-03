import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BordGameComponent } from './bord-game.component';

describe('BordGameComponent', () => {
  let component: BordGameComponent;
  let fixture: ComponentFixture<BordGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BordGameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BordGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
