import React, { Component } from "react";
import "./QuestionCard.scss";

const QuestionCard = () => {
  return (
    <div className="QuestionCard">
      <div className="QuestionCard__Main">
        <div className="QuestionCard__Main__Info">
          <div className="QuestionCard__Main__Info__Group">
            <div className="QuestionCard__Main__Info__Group__Number">2</div>
            <div className="QuestionCard__Main__Info__Group__Text">glasova</div>
          </div>
          <div className="QuestionCard__Main__Info__Group">
            <div className="QuestionCard__Main__Info__Group__Number">10</div>
            <div className="QuestionCard__Main__Info__Group__Text">
              odgovora
            </div>
          </div>
        </div>
        <p className="QuestionCard__Main__Title">
          Question: zasto kasnimo sa app ovoliko hm?hmhmhmhmhhm hmsdfhsm
          sdfsfjgj sdglj
        </p>
      </div>
      <div className="QuestionCard__Footer">
        <p className="QuestionCard__Footer__Text">asked by John doe</p>
      </div>
    </div>
  );
};

export default QuestionCard;
