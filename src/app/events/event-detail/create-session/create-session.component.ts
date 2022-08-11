import { Component, EventEmitter, OnChanges, Output, SimpleChanges } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { ISession, restrictedWords } from "../../shared";


@Component({
  selector: 'app-create-session',
  templateUrl: './create-session.component.html',
  styles: [`
    em {float: right; color: #E05C65; padding-left: 10px;}
    .error input {background: #e3C3C5;}
    .error ::-wekit-input-placeholder {color: #999;}
    .error ::-moz-input-placeholder {color: #999;}
    .error :-moz-input-placeholder {color: #999;}
  `]
})
export class CreateSessionComponent {

  @Output() saveNewSession = new EventEmitter;
  @Output() cancelSession = new EventEmitter;

  newSessionForm: FormGroup;

  wordCount: number = 50;

  constructor (private fb: FormBuilder) {
    this.newSessionForm = this.fb.group({
      name: ['', Validators.required],
      presenter: ['', Validators.required],
      duration: ['', Validators.required],
      level: ['', Validators.required],
      abstract: ['', [Validators.required, Validators.maxLength(this.wordCount), restrictedWords(['foo', 'bar'])]],
    });
  }


  saveSession(formValues: any) {
    const session: ISession = {...formValues, voters: []};
    this.saveNewSession.emit(session)
  }


  get abstract() {
    return this.newSessionForm.get('abstract');
  }

  cancel() {
    this.cancelSession.emit()
  }
}
