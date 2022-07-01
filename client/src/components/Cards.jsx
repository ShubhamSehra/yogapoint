import React from 'react';

const Card = () =>{
    return(
        <div className="container">
        <div className="card-container">
          <div className="image-container">
            <img src={`/photos/${props.photo}`} alt="..." />
          </div>
          <div style={{ textTransform: "uppercase" }}>
            <div className="card-fonts">
              {" "}
              <strong>
                {" "}
                {props.fname} {props.lname}{" "}
              </strong>{" "}
            </div>
            <span>s/o {props.father} </span>
            <p>class: {props.stndrd} </p>
          </div>
        </div>
      </div>
    )

}

export default Card;