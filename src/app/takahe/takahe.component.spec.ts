import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakaheComponent } from './takahe.component';

describe('TakaheComponent', () => {
  let component: TakaheComponent;
  let fixture: ComponentFixture<TakaheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakaheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakaheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
