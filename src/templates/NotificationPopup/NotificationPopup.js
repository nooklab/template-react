import React from 'react';
import { useTranslation } from 'react-i18next';
import DropdownMenu from '../../components/DropdownMenu';
// import brandLogo from '../../assets/images/logo-color.png'
import NotificationPopupItem from './NotificationPopupItem';

/**
 * 알림 팝업 메뉴
 *
 * @param {Object} props
 * @param {Notification[]} props.items
 */
function NotificationPopup({ items }) {
  const { t } = useTranslation();

  return <div className='notification-popup'>
    <DropdownMenu>
      {items.length === 0 && <div className='text-center text-muted p-3'>
        {t('NotificationPopup.emptyMessage')}
      </div>}

      {items.map(item => item.user ?
        <NotificationPopupItem
          key={item.id}
          message={item.message}
          createdAt={item.createdAt}
          thumbUrl={item.thumbUrl}
          linkTo={'/' + item.user.name}
        /> :
        <NotificationPopupItem
          key={item.id}
          message={item.message}
          thumbUrl={item.thumbUrl}
          createdAt={item.createdAt}
        />
      )}

      <div className='text-center p-2'>
        <img src={null} alt={t('brand')} width={100} />
      </div>
    </DropdownMenu>
  </div>;
}

export default NotificationPopup;
