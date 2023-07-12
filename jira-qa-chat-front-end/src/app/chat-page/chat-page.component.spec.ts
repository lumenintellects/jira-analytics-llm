import { TestBed } from '@angular/core/testing';
import { ChatPageComponent } from './chat-page.component';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [ChatPageComponent]
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(ChatPageComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'ai-chat-front-end'`, () => {
    const fixture = TestBed.createComponent(ChatPageComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('ai-chat-front-end');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(ChatPageComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('ai-chat-front-end app is running!');
  });
});
