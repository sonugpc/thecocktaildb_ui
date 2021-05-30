import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchComponent } from './search.component';
import { RouterTestingModule } from '@angular/router/testing';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchComponent ],
      imports: [RouterTestingModule,HttpClientModule,MatDialogModule],
      providers: [{provide: MatDialogRef, useValue: {} },
      ],
    })
    .compileComponents();
  });


it('should create', () => {
  const fixture = TestBed.createComponent(SearchComponent);
  const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
