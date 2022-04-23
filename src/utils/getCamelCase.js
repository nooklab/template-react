
/**
 * 특정 기호로 연결된 단어들을 카멜 케이스로 변환해줌.
 * 예) 
 *  to-camel-case -> toCamelCase
 *  user not found -> userNotFound
 * 
 * @param {string} str 
 */
export default function getCamelCase(str) {
  const words = str.split(/[\W_]/);

  return [
    words[0].toLowerCase(),
    ...words.slice(1).map(word => word[0].toUpperCase() + word.substring(1).toLowerCase())
  ].join('');
}
