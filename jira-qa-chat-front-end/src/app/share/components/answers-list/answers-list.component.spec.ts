import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatClientComponent } from './answers-list.component';

describe('ChatClientComponent', () => {
  let component: ChatClientComponent;
  let fixture: ComponentFixture<ChatClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChatClientComponent]
    });
    fixture = TestBed.createComponent(ChatClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
