
import Favorites from '../components/Favourites'
import {connect} from 'react-redux'


const mapState=(state)=>{
    console.log(state.favorite)
    return{
        fav:state.favorite
    }
}

export default connect(mapState)(Favorites)

