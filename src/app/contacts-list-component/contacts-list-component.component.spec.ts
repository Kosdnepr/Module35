import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactsListComponentComponent } from './contacts-list-component.component';

describe('ContactsListComponentComponent', () => {
  let component: ContactsListComponentComponent;
  let fixture: ComponentFixture<ContactsListComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactsListComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactsListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
