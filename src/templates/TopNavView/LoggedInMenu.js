import React, {useContext} from 'react';
import { useTranslation } from 'react-i18next';
import { TopNavUserButton } from '../../components/TopNav';
import personCircleGreen from '../../assets/images/person-circle-green.svg'

/**
 * 로그인 메뉴
 *
 * @param {Object} props
 * @param {User} props.user 로그인한 유저 정보
 * @param {Notification[]} props.notifications 알림 데이터 목록
 * @param {function} props.onLogOut 로그아웃 버튼 클릭 콜백
 */
function LoggedInMenu({ user, notifications = [], onLogOut }) {
  const { t } = useTranslation();

  const privileges = null

  return <div id={'logged-in-menu'}>
    <TopNavUserButton
      avatarSrc={personCircleGreen}
      title={user.name || user.profile.urlKey}
    />
  </div>;
}

export default LoggedInMenu;
