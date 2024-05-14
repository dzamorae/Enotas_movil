import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MenuApoderadoComponent } from './menu-apoderado.component';

describe('MenuApoderadoComponent', () => {
  let component: MenuApoderadoComponent;
  let fixture: ComponentFixture<MenuApoderadoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [MenuApoderadoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(MenuApoderadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
