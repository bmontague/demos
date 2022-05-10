import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatCardModule } from '@angular/material/card';
import { RouterTestingModule } from '@angular/router/testing';

import { GameDetailComponent } from './game-detail.component';

describe('GameDetailComponent', () => {
  let component: GameDetailComponent;
  let fixture: ComponentFixture<GameDetailComponent>;
 const environment = {
  production: false,
  apiUrl: '',
};
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GameDetailComponent],
      imports: [MatCardModule, RouterTestingModule, HttpClientModule],
      providers: [{ provide: 'baseUrl', useValue: environment.apiUrl }],
    }).compileComponents();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(GameDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create GameDetailComponent', () => {
    expect(component).toBeTruthy();
  });
});
