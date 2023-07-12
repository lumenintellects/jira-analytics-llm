import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { AnswerMsg } from '@core/models'
import {FormsModule} from "@angular/forms";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'answers-list',
  templateUrl: './answers-list.component.html',
  styleUrls: ['./answers-list.component.scss'],
  standalone: true,
  imports: [FormsModule, CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AnswersListComponent {

  @Input() messages: AnswerMsg[] = [];
  @Input() isLoading = false;
  @Output() onSend = new EventEmitter<string>();
  public inputText = '';

  constructor() {}

  public submitRequest() {
    this.onSend.emit(this.inputText.trim());
  }

  public toggleDocuments(message: AnswerMsg): void {
    message.showDocuments = !message.showDocuments;
  }
}
