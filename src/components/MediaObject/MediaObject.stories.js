import React from 'react'
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import MediaObject from './MediaObject';
import Avatar from '../Avatar';
import PopupIconButton from '../PopupIconButton';
import Iconlabel from '../IconLabel';
import DropdownMenu, { DropdownItem } from '../DropdownMenu';

const dummyAvatarSrc = 'https://yt3.ggpht.com/a/AGF-l78sNo89cgLByYbWECzNU0uN7TUPiABD0CBseA=s48-c-k-c0xffffffff-no-rj-mo';

function MoreMenu() {
  return <DropdownMenu>
    <DropdownItem>
      <button type='button' className='btn btn-text' onClick={action('추천에 관심없습니다 클릭')}>
        <Iconlabel icon='eye-slash' label='이 추천에 관심이 없습니다.' />
      </button>
    </DropdownItem>
  </DropdownMenu>;
}

function DefaultMedia() {
  return <div className='row'>
    <div className='col-3'>
      <MediaObject
        header='WOW CLASSIC 19렙 시작! 인간 성기사! 방금 팀원 체력 책임지는 상상함 ㅋㅋ'
        left={<Avatar size='3em' src={dummyAvatarSrc} />}
        right={<PopupIconButton menu={<MoreMenu />}><span className='fas fa-ellipsis-v' /></PopupIconButton>}
      >
        성기사(seonggisa)
        <br />
        <button type='button' className='btn btn-secondary btn-sm'>한국어</button>
      </MediaObject>
    </div>
  </div>;
}

storiesOf('UI/MediaObject', module)
  .add('default', () => <DefaultMedia />);
