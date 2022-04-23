import getCamelCase from './getCamelCase';

test('getCamelCase', () => {
  expect(getCamelCase('get camel case')).toBe('getCamelCase');
  expect(getCamelCase('Get Camel case')).toBe('getCamelCase');
  expect(getCamelCase('get_Camel_case')).toBe('getCamelCase');
  expect(getCamelCase('get-camel-case')).toBe('getCamelCase');
  expect(getCamelCase('Get-CAMEL_case')).toBe('getCamelCase');
  expect(getCamelCase('good 2 be')).toBe('good2Be');
});
