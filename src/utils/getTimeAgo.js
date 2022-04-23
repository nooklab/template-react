import dayjs from 'dayjs';

function getTimeAgo(date) {
  const showDate = dayjs().diff(date, 'weeks') > 5;

  if (!showDate) {
    return dayjs(date).fromNow();
  } else {
    return dayjs(date).format('D MMM YYYY');
  }
}

export default getTimeAgo;
