import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomePagesComponent } from './home-pages.component';

describe('HomePagesComponent', () => {
  let component: HomePagesComponent;
  let fixture: ComponentFixture<HomePagesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomePagesComponent]
    });
    fixture = TestBed.createComponent(HomePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
