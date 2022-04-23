import React from 'react';

/**
 * 고정비율을 가진 이미지 컴포넌트
 *
 * @param {Object} props
 * @param {string} props.className 내부 요소 클래스 지정
 * @param {string} props.src 이미지 주소
 * @param {string} props.size 이미지 크기
 * @param {number} props.ratio 이미지 고정비율 (가로크기/세로크기)
 */
function AspectRatioImage({className, src, size = 'cover', ratio = 4 / 3, radius = 0}) {
    return <span
        className={'aspect-ratio-image' + (className ? ' ' + className : '')}
        style={{
            backgroundImage: `url(${src})`,
            backgroundSize: size,
            paddingTop: Math.floor(100 / ratio) + '%',
            borderRadius: `${radius}px`
        }}
    />;
}

export default AspectRatioImage;
