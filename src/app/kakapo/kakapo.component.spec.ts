import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KakapoComponent } from './kakapo.component';

describe('KakapoComponent', () => {
  let component: KakapoComponent;
  let fixture: ComponentFixture<KakapoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KakapoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KakapoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
