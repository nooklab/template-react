import moment from 'moment';
import getTimeAgo from './getTimeAgo';

test('getTimeAgo', () => {
  const threeDaysAgo = moment().subtract(3, 'days').toDate();
  const thirteenMinuitesAgo = moment().subtract(13, 'minutes').toDate();
  const sixWeeksAgo = moment('2019-09-19').subtract(6, 'weeks').toDate();

  expect(getTimeAgo(threeDaysAgo)).toBe('3 days ago');
  expect(getTimeAgo(thirteenMinuitesAgo)).toBe('13 minutes ago');
  expect(getTimeAgo(sixWeeksAgo)).toBe('8 Aug 2019');
});
