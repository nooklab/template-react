import getCamelCase from './getCamelCase';

test('getCamelCase', () => {
  expect(getCamelCase('')).toBe('');
  expect(getCamelCase('user not found')).toBe('userNotFound');
  expect(getCamelCase('Auth check')).toBe('authCheck');
  expect(getCamelCase('its show-time')).toBe('itsShowTime');
  expect(getCamelCase('super 8-miles')).toBe('super8Miles');
});
