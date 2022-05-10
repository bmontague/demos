import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';

import { StoreUiSharedModule } from 'nx-demo/store/ui-shared';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';
describe('AppComponent', () => {
  beforeEach(async () => {
    TestBed.configureTestingModule({
      imports: [
        MatCardModule,
        MatToolbarModule,
        StoreUiSharedModule,
        HttpClientModule,
        RouterTestingModule
      ],
      declarations: [AppComponent],
      providers: [{provide: 'baseUrl',useValue: environment.apiUrl,}]
    }).compileComponents();
  });

  it('should create the app', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'store'`, () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  console.log('this');
    expect(app.title).toEqual('Board Game Hoarding');
  });
});



