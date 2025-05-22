import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { CommonModule } from '@angular/common';
import { SearchComponent } from '../search/search.component';
import { MatButtonModule } from '@angular/material/button';
import { HomeService } from './service/home.service';
import { PopupService } from '../common/service/popup/popup.service';
import { AlertService } from '../common/service/alert/alert.service';
import { CommonService } from '../common/service/common/common.service';
import { provideHttpClient } from '@angular/common/http';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let homeService: HomeService;
  let commonService: CommonService;
  let popupService: PopupService;
  let alertService: AlertService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeComponent, CommonModule, SearchComponent, MatButtonModule ],
      providers: [ HomeService, PopupService, AlertService, CommonService, provideHttpClient() ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    homeService = TestBed.inject(HomeService);
    commonService = TestBed.inject(CommonService);
    popupService = TestBed.inject(PopupService);
    alertService = TestBed.inject(AlertService);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
