import style from "./Card.module.css";

const Card = () => {
  return (
    <div
      className={`${style.card}`}
    >
      <h2 className="">WhatCV</h2>
      <div className=" "></div>
      <span className="">
        Subject to status. UK residents only. PayPal is a responsible lender.
        Pay in 3 performance may influence your credit score. T&Cs apply.
      </span>
      <button
        type="button"
        className=" bg-purple hover:bg-purple-700 text-white font-semibold py-3 px-6 rounded-lg shadow max-w-fit "
      >
        Saber Mais
      </button>
    </div>
  );
};

export default Card;
