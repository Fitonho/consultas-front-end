import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ConsultasHojePage } from './consultas-hoje.page';

describe('ConsultasHojePage', () => {
  let component: ConsultasHojePage;
  let fixture: ComponentFixture<ConsultasHojePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultasHojePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ConsultasHojePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
