import { addMethod, string } from 'yup';
import i18next from 'i18next';
import debounce from './utils/debounce';

const debounceUnique = debounce(true);

/**
 * 유일한 값 검증
 */
addMethod(string, 'unique', function (onCheckUnique, validationMessage) {
  return this.test('unique', validationMessage, function (value) {
    return debounceUnique(() => onCheckUnique(value));
  });
});

/**
 * 아이디 검증
 */
addMethod(string, 'userId', function () {
  return this.test('userId', i18next.t('validation.userId'), function (value) {
    // 영문 소문자로 시작하는 4~25자의 숫자와 영문 소문자
    const regex = /^[a-z][a-z0-9]{3,24}$/;
    return regex.test(value);
  });
});

/**
 * 닉네임 검증
 */
addMethod(string, 'nickname', function () {
  return this.test('nickname', i18next.t('validation.nickname'), function (value) {
    // 2-25자의 영문 소문자, 한글, 숫자, 언더바(_) 조합
    const regex = /^[a-zA-Z0-9ㄱ-ㅎㅏ-ㅣ가-힣_]{2,25}$/;
    return regex.test(value);
  });
});

/**
 * 비밀번호 검증
 */
addMethod(string, 'password', function () {
  return this.test('password', i18next.t('validation.password'), function (value) {
    // 영문과 숫자가 섞인 8자 이상의 문자
    // const regex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}/;
    // 8자 이상인 모든 문자
    const regex = /^.{6,}/;
    return regex.test(value);
  });
});

/**
 * 최대 줄수 검증
 */
addMethod(string, 'maxLines', function (maxLines) {
  return this.test('maxLines', i18next.t('validation.maxLines', { max: maxLines }), function (value) {
    if (typeof value === 'string') {
      const n = value.split('\n');

      return n.length <= maxLines;
    }

    return true;
  });
});
