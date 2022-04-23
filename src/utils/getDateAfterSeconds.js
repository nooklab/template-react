
/**
 * 현재 시간에서 sec 초 만큼 후의 시간을 반환한다.
 * 
 * @param {number} sec 
 */
export default function getDateAfterSeconds(sec) {
  const now = new Date();
  return new Date(now.getTime() + sec * 1000);
}
