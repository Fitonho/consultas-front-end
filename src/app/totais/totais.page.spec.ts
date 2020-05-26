import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TotaisPage } from './totais.page';

describe('TotaisPage', () => {
  let component: TotaisPage;
  let fixture: ComponentFixture<TotaisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TotaisPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TotaisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
