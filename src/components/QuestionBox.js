import { sortDependencies } from 'mathjs';
import React, { Component } from 'react'

export default class QuestionBox extends Component {
    constructor(props) {
        super();
        this.state={
            green:false,
         
        }
    }
    
    handleInput = (e) => {
    const {correct}=this.props;
    if(correct===e.target.value){
        this.setState({green:true})
    }else{
        this.setState({green:false})
    }
    }


    quizQuestions() {
        const { question, answers,selected} = this.props;
        return (
            <div className="questionBox">
                <div className="question">
                    {question}
                </div>
                {answers.map((text, index) => {
                    return <input type="button" className="yellowButton" value={text} onClick={e =>{this.handleInput(e, "value");selected(e,"value")}} ></input>

                })}
            </div>
        )
    }

    quizAnswers() {
        const { question, correct } = this.props;
       
        return (
            <div className="questionBox">
                <div className="question">
                    {question}
                </div>

                <input type="button" className="yellowButton" value={correct} ></input>


            </div>
        )
    }

    render() {

     
        return (
            <div>
                {this.state.green === false ? (this.quizQuestions()) : (this.quizAnswers())}
            </div>
        )
    }
}
