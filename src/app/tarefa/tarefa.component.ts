import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefa',
  templateUrl: './tarefa.component.html',
  styleUrls: ['./tarefa.component.css']
})
export class TarefaComponent implements OnInit {

  password = 'you cant see the password'
  showPassword = false
  buttonLog = []

  constructor() { }

  ngOnInit() {
  }

  allowDisplayPassword() {
    this.showPassword = true
    if (this.showPassword === true) {
      this.password = 'tuna'
      this.buttonLog.push(this.buttonLog.length + 1)
    }
  }

  getButtonClicks() {

  }

}
