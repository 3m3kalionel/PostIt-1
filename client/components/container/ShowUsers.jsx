import { connect } from 'react-redux';
import UsersView from '../presentation/Main/UsersView';
import {
  getUser,
  selectUser,
  clearSelectedUser
} from '../../actions/actionCreators/UserActions';
import {
  addUserToGroup,
  getGroupUsers
} from '../../actions/actionCreators/GroupActions';

const mapStateToProps = (state, ownProps) =>
  ({
    ...ownProps,
    user: state.selectedUser,
    users: state.activeGroupUsers,
    allUsers: state.users,
    activeGroup: state.activeGroup
  });

const ShowUsers = connect(
  mapStateToProps,
  {
    selectUser,
    getUser,
    addUserToGroup,
    getGroupUsers,
    clearSelectedUser
  }
)(UsersView);

export default ShowUsers;
