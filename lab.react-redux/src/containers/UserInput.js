import { connect } from 'react-redux';
import UserInput from '../components/UserInput'
import { addUser } from '../redux/actions';

const mapDispachToProps = (dispach) => ({
    onUserAdd: (name) => dispach(addUser(name))
})

export default connect(null, mapDispachToProps)(UserInput);

