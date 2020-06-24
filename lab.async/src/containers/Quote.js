import { connect } from "react-redux";
import Quote from "../components/Quote";
import { fetchQuote,addFav } from "../redux/actions";


const mapDispatchToProps = (dispatch) => {
  return {
    kartofel: () => dispatch(fetchQuote()),
    addToFav: (quote)=> dispatch(addFav(quote))
  };
};

const mapStateToProps = (state) => {
  return {
    quoteP: state.quoteY.quote,
    loadingP: state.quoteY.loadingX,
    errorP: state.quoteY.error,
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Quote);