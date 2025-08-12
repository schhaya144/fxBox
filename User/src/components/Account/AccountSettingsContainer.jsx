import React, { useState } from 'react';
import AccountSetting from './AccountSetting';
import ChangeAvatar from './ChangeAvatar';

const AccountSettingsContainer = () => {
  const [avatar, setAvatar] = useState(require('../../assets/av12.png')); // Set the initial avatar to av12

  return (
    <div>
      <AccountSetting avatar={avatar} />
      <ChangeAvatar setAvatar={setAvatar} />
    </div>
  );
};

export default AccountSettingsContainer;
