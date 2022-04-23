import React from 'react';
import { DropdownItem, DropdownLink } from '../../components/DropdownMenu';
import getTimeAgo from '../../utils/getTimeAgo';
import Avatar from '../../components/Avatar';
import MediaObject from '../../components/MediaObject';

/**
 * 알림 팝업 항목
 * 
 * @param {Object} props 
 * @param {string} props.thumbUrl
 * @param {string} props.message
 * @param {string} props.createdAt
 * @param {string} props.linkTo
 */
function NotificationPopupItem({ thumbUrl, message, createdAt, linkTo }) {
  const Wrapper = linkTo ? ({ children }) => <DropdownLink to={linkTo}>{children}</DropdownLink> : DropdownItem;
  console.log(thumbUrl)

  return <Wrapper>
    <MediaObject left={thumbUrl ? <Avatar src={thumbUrl} size='3em' /> : ''}>
      <div>{message}</div>
      <small className='text-black-50'>{getTimeAgo(createdAt)}</small>
    </MediaObject>
  </Wrapper>;
}

export default NotificationPopupItem;
