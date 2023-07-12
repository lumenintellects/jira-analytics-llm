import {ChangeDetectionStrategy, Component} from '@angular/core';
import {ChatPageComponent} from "./chat-page/chat-page.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [ChatPageComponent],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
}
