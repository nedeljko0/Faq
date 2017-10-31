import { Injectable } from '@angular/core';
import { Question } from '../models/Question';

@Injectable()
export class DataService {
  questions:Question[];

  constructor() { 
    /*
    this.questions = [
      {
        text:'What is your name?',
        answer:'My name is Jani',
        hide:true
      },
      {
        text:'What is your favorite colour?',
        answer:'My favourite color is blue',
        hide:true
      },
      {
        text:'What is your favorite language?',
        answer:'My favourite language is JavaScript',
        hide:true
      }
    ];
    */

  }

  //dobi vprašanja iz lokalne hrambe
  getQuestions(){

    if(localStorage.getItem('questions') == null){
      this.questions = [];
    }else{
      this.questions = JSON.parse(localStorage.getItem('questions'));
    }


    return this.questions;
  }

  //dodaj vprašanja v lokalno shrambo
  addQuestion(question:Question){
    this.questions.unshift(question);

    //init local var
    let questions;

    if(localStorage.getItem('questions') == null){
      questions = [];
      //push new question
      questions.unshift(question);
      //set new array to ls
      localStorage.setItem('questions', JSON.stringify(questions));
    }else{
      questions = JSON.parse(localStorage.getItem('questions'));
      // add new question
      questions.unshift(question);
      //re set ls
      localStorage.setItem('questions', JSON.stringify(questions));
      
    }
  }

  //odstrani vprašanje iz lokalne shrambe
  removeQuestion(question:Question){
    for(let i = 0; i < this.questions.length; i++){
        if(question == this.questions[i]){
          this.questions.splice(i,1);
          localStorage.setItem('questions', JSON.stringify(this.questions));
        }
    }
  }

}
