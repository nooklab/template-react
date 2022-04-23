import React, { useState, useRef } from 'react'
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import DropdownMenu from './DropdownMenu';
import DropdownLink from './DropdownLink';
import DropdownDivider from './DropdownDivider';
import DropdownHeader from './DropdownHeader';
import Popup from '../Popup';
import UserStatus from '../UserStatus';
import DropdownItem from './DropdownItem';
import DropdownSwitch from './DropdownSwitch';
import DropdownButton from './DropdownButton';

const dummyAvatarSrc = 'https://yt3.ggpht.com/a/AGF-l78sNo89cgLByYbWECzNU0uN7TUPiABD0CBseA=s48-c-k-c0xffffffff-no-rj-mo';

function WithTogglerDropdownMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDarkTheme, setIsDarkTheme] = useState(false);
  const ref = useRef();

  function handleToggle() {
    setIsOpen(!isOpen);
  }

  function handleDarkThemeChange(e) {
    setIsDarkTheme(e.target.value);
  }

  return <button className='btn btn-light' type='button' ref={ref} onClick={handleToggle}>
    <span>Toggle</span>

    <Popup targetRef={ref} isOpen={isOpen} onClickOutside={handleToggle}>
      <DropdownMenu>
        <DropdownItem>
          <UserStatus avatarSrc={dummyAvatarSrc} title='신기원 piano' subtitle='온라인' />
        </DropdownItem>
        <DropdownDivider />
        <DropdownSwitch value={isDarkTheme} onChange={handleDarkThemeChange}>Dark theme</DropdownSwitch>
        <DropdownHeader>Home</DropdownHeader>
        <DropdownLink to='/'>Home</DropdownLink>
        <DropdownDivider />
        <DropdownHeader>Links</DropdownHeader>
        <DropdownLink to='/live'>Live</DropdownLink>
        <DropdownLink to='/rank'>Rank</DropdownLink>
        <DropdownButton onClick={action('DropdownButton click')}>Button</DropdownButton>
      </DropdownMenu>
    </Popup>
  </button>;
}

storiesOf('UI/DropdownMenu', module)
  .addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)
  .add('with toggler', () => (
    <WithTogglerDropdownMenu />
  ));
