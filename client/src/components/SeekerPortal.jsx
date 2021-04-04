import React from 'react';

import Profile from './Profile.jsx';
import Tabs from './Tabs.jsx';

class SeekerPortal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return(
      <div>
        <Profile />
        <Tabs />
      </div>
    );
  };
};

export default SeekerPortal;