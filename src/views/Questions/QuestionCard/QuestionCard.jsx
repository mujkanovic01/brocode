import React, { Component } from "react";
import "./QuestionCard.scss";

const QuestionCard = (question) => {
  return (
    <div className="QuestionCard">
      <div className="QuestionCard__Main">
        <div className="QuestionCard__Main__Info">
          <div className="QuestionCard__Main__Info__Group">
            <div className="QuestionCard__Main__Info__Group__Number">2</div>
            <div className="QuestionCard__Main__Info__Group__Text">glasova</div>
          </div>
          <div className="QuestionCard__Main__Info__Group">
            <div className="QuestionCard__Main__Info__Group__Number"></div>
            <div className="QuestionCard__Main__Info__Group__Text">
              odgovora
            </div>
          </div>
        </div>
        <p className="QuestionCard__Main__Title">
      
         {question.question._desc}
        </p>
      </div>
      <div className="QuestionCard__Footer">
        <p className="QuestionCard__Footer__Text">asked by John doe</p>
      </div>
    </div>
  );
};

export default QuestionCard;
