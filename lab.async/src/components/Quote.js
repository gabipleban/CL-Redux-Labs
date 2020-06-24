// Quote.propTypes = {
//   quote: PropTypes.object,
//   loading: PropTypes.bool,
//   error: PropTypes.string,
//   fetchQuote: PropTypes.func.isRequired
// };
//
// export default Quote;


import React from "react";
const Quote = (props) => {
  return (
    <div>
      <button onClick={props.kartofel} disabled={props.loadingP}>
        Pobierz cytat
      </button>
      {props.quoteP && !props.loadingP && (
        <p>
          {props.quoteP.quote}-{props.quoteP.author}
        </p>
      )}
      {props.loadingP && <p>Ładuje dane</p>}
      {props.errorP && !props.loadingP && <p>{props.error}</p>}
      {props.quoteP && !props.loadingP && (
        <button onClick={()=>props.addToFav(props.quoteP)}>
          dodaj do ulubionych
        </button>
      )}
    </div>
  );
};
export default Quote;