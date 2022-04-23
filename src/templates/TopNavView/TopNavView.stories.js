import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import TopNavView from './TopNavView';
import NotLoggedInMenu from './NotLoggedInMenu';

function NotLoggedInTopNavView() {
  const [searchItems, setSearchItems] = useState(null);

  function handleSearchChange(value) {
    if (value) {
      setSearchItems([
        { linkTo: '/search1', title: 'Search1' },
        { linkTo: '/search2', title: 'Search2' }
      ]);
    } else {
      setSearchItems([]);
    }
  }

  return <TopNavView
    searchItems={searchItems}
    onSearch={handleSearchChange}
    onSearchConfirm={action('onSearchConfirm')}
    right={<>
      <NotLoggedInMenu onLoginOpen={action('onLoginOpen')} />
    </>}
  >
    <div className='w-100 bg-dark' />
  </TopNavView>;
}

storiesOf('Templates/TopNavView', module)
  .addDecorator(story => <BrowserRouter>{story()}</BrowserRouter>)
  .add('default', () => <NotLoggedInTopNavView />);
