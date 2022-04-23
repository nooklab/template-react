import linkify from './linkify';

test('linkify', () => {
  const str = 'hello world! visit http://example.com web site.';
  const result = linkify(str);

  expect(result.length).toBe(3);
  expect(result[0].type).toBe('text');
  expect(result[1].type).toBe('link');
});
