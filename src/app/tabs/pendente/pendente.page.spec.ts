import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PendentePage } from './pendente.page';

describe('PendentePage', () => {
  let component: PendentePage;
  let fixture: ComponentFixture<PendentePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendentePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PendentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
