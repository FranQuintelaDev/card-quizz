import React from 'react';
import messi from './messi-chiquito.jpg';
import classNames from 'classnames';

export default function FootballPlayers() {


  const clickHandler = (event) => {
    const allWithClass = Array.from(
      document.querySelectorAll('div.correct')
    );
    allWithClass.forEach(element => {
      element.classList.remove('correct');
    });
    const allWithClassIncorrect = Array.from(
      document.querySelectorAll('div.incorrect')
    );
    allWithClassIncorrect.forEach(element => {
      element.classList.remove('incorrect');
    });

    if(event.target.innerText === 'Messi chiquito'){
      event.currentTarget.classList.add('correct');
    }else{
      event.currentTarget.classList.add('incorrect');
    };
    
  };


  return (
    <>
      <div className="rows">
        <div className="cols">
          <div className="football-player rows">

            <img src={messi} alt="Hot air balloons" className='raised img cover rounded-top' />
            <div className="card-description flex-center" >
              <h2>Messi </h2>
              <p>Messi chiquito messi chiquito </p>

            </div>
            <div className="options rows">
              <div className="cols">
              <div className={classNames({ "option neumo flat flex-center": true })} onClick={clickHandler}>
                  Messi

                </div>
                <div className={classNames({ "option neumo flat flex-center": true })} onClick={clickHandler}>
                  Chiquito

                </div>
              </div>
              <div className="cols">
              <div className={classNames({ "option neumo flat flex-center": true })} onClick={clickHandler}>
                  Messi chiquito

                </div>
                <div className={classNames({ "option neumo flat flex-center": true })} onClick={clickHandler}>
                  La pulga argentina

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}


