import React, { Component } from 'react'
import "./assets/Style.css"
import Results from "./components/Results"
import data from "./quizAPI/data"
import QuestionBox from "./components/QuestionBox"


export default class App extends Component {

 
  state = {
    questions: [],  
   score:0,
   responses:0

  }

 
  getQuestions = () => {
    data().then((res) => this.setState({ questions: res }));
  }

  componentDidMount() {
    this.getQuestions();
  }

playAgain=()=>{
  this.getQuestions();
  this.setState({score:0,responses:0})
}
 computeAnswer = (e,correctAns) => { 
   
  if (e.target.value === correctAns) { 
    this.setState({ score: this.state.score + 1 }); 
  } 
  this.setState({responses: this.state.responses < 5 ? this.state.responses + 1 : 5}); 
}; 

 
  render() {
   const {questions,responses,score}=this.state;
    
    return (
      <div className="container">
        <div className="title">QuizBee</div>
        {questions.length>0 && responses< 5 && questions.map(item=>{
             return <QuestionBox question={item.question} answers={item.answers} correct={item.correct} key={item.questionId} selected={answer => this.computeAnswer(answer, item.correct)}></QuestionBox>      
                })}
               {responses===5?(<Results score={score} playAgain={this.playAgain}></Results>):null}
              
      </div>

    )
  }
}
