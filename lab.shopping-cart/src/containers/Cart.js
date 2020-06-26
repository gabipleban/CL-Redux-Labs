// W tym pliku należy skorzystać z selektorów zaimplementowanych w pliku redux/selectors
// export default connect(mapState, mapDispatch)(Cart);
import {connect} from 'react-redux'
import Cart from "../components/Cart";
import {removeProduct, addProduct} from "../redux/actions";
import {selectProducts, sum} from '../redux/selectors'
const mapState = (state, ownProps) => ({
    products: selectProducts(state, ownProps.match.params.price),
    sum: sum(state, ownProps.match.params.price)
})
const mapDispatch = (dispatch) => ({
    addProduct: (product) => dispatch(addProduct(product)),
    removeProduct: (product) => dispatch(removeProduct(product))
})
export default connect(mapState, mapDispatch)(Cart)