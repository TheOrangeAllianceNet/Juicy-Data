import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { TetrixVsVexproTheFactsComponent } from './tetrix-vs-vexpro-the-facts.component';
import { OptInEmailComponent } from '../opt-in-email/opt-in-email.component';

describe('TetrixVsVexproTheFactsComponent', () => {
  let component: TetrixVsVexproTheFactsComponent;
  let fixture: ComponentFixture<TetrixVsVexproTheFactsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TetrixVsVexproTheFactsComponent, OptInEmailComponent ],
      imports: [
        FormsModule,
        HttpClientModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TetrixVsVexproTheFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
