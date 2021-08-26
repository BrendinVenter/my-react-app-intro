import * as React from 'react';

// markup
const DisplayUsers = ({ users }) => (
  <>
    {users.map((user) => (
      <div key={user.id}>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.mobile}</p>
      </div>
    ))}
  </>
);

export default DisplayUsers;
