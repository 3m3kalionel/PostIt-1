import React from 'react';
import PropTypes from 'prop-types';
import UserView from './UserView.jsx';

const MemberListView = ({ users, selectUser }) =>
  (
    <div>
      {
        (users) ? (users.map(user =>
          (<UserView
            key={user.username}
            user={user}
            selectUser={selectUser}
          />)
        )) : null
      }
    </div>
  );

MemberListView.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object).isRequired,
  selectUser: PropTypes.func.isRequired
};

export default MemberListView;
