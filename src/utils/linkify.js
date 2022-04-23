
export default function linkify(str) {
  if (typeof str !== 'string') {
    return [];
  }

  const re = /(https?:\/\/[a-z0-9&#=./\-?_]+)/gi; 
  const result = str.split(re);

  return result.map(p => re.test(p) ? {
    type: 'link',
    value: p
  } : {
    type: 'text',
    value: p
  });
}
