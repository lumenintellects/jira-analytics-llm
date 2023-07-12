import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AnswerMsg } from '@core/models';
import { AnswerDtoInterface } from '@core/inrefaces';
import { delay, map, Observable, of } from 'rxjs';

// todo: move base url to the ENV config and build configuration
const GET_ANSWER = `http://localhost:8000/answer`;

@Injectable({
  providedIn: 'root',
})
export class ChatHttpServiceService {

  constructor(private http: HttpClient) {
  }

  public getAnswers(question: string): Observable<AnswerMsg> {
    return this.http.get<AnswerDtoInterface>(`${GET_ANSWER}?query=${encodeURIComponent(question)}`).pipe(
        map((response: AnswerDtoInterface) => {
          const answerMsg: AnswerMsg = new AnswerMsg({
            answer: response.answer,
            documents: response.source_documents,
              question
          });
          return answerMsg;
        })
    );
  }
}
