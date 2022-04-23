import React, { useState, useRef, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import cn from 'classnames';
import defaultImagePlaceholder from '../../assets/images/image-placeholder.png';

/**
 * 이미지 입력
 * 
 * @param {Object} props 
 * @param {string} props.name
 * @param {string} props.value
 * @param {function} props.onChange
 * @param {string} props.imagePlaceholder 이미지가 없을때 보여질 기본 이미지 주소
 * @param {boolean} props.rounded 이미지 프리뷰를 원모양으로 보일 것인지 여부
 * @param {string} props.accept 파일 MIME Type 필터
 */
function ImageInput({
  name,
  value,
  onChange,
  imagePlaceholder = defaultImagePlaceholder,
  rounded,
  accept='image/png,image/jpeg,image/gif'
}) {
  const [isHighlight, setIsHightlight] = useState(false);
  const [url, setUrl] = useState(value);
  const dropRef = useRef();
  const inputRef = useRef();
  const { t } = useTranslation();
  const uploadFiles = useCallback(files => {
    const file = files[0];

    if (!file) {
      return;
    }

    if (file.type.indexOf('image') < 0) {
      throw new Error('ImageInput.imageOnly');
    } else if (accept.indexOf(file.type) < 0) {
      throw new Error('ImageInput.notAccepted')
    }

    const reader = new FileReader();
    
    reader.onload = r => {
      setUrl(r.target.result);
    };
    reader.readAsDataURL(file);

    if (onChange) {
      onChange({
        target: {
          name,
          value: file
        }
      });
    }
  }, [name, accept, onChange]);

  useEffect(() => {
    function highlight(e) {
      e.stopPropagation();
      e.preventDefault();
      setIsHightlight(true);
    }

    function unhighlight(e) {
      e.stopPropagation();
      e.preventDefault();
      setIsHightlight(false);
    }

    dropRef.current.addEventListener('dragenter', highlight);
    dropRef.current.addEventListener('dragover', highlight);
    dropRef.current.addEventListener('dragleave', unhighlight);
    dropRef.current.addEventListener('drop', unhighlight);
    dropRef.current.addEventListener('drop', e => {
      uploadFiles(e.dataTransfer.files);
    });
  }, [uploadFiles]);

  function handleChange(e) {
    if (e.target.files) {
      uploadFiles(e.target.files);
    }
  }

  function handleControlClick() {
    if (inputRef.current) {
      inputRef.current.click();
    }
  }

  return <div className={cn('image-input', isHighlight && 'image-input--highlight')} ref={dropRef}>
    <div className={cn('image-input__thumbnail', rounded && 'image-input__thumbnail--rounded')}>
      <img src={url || imagePlaceholder} alt='upload' />
    </div>

    <div className='image-input__control'>
      <input className='image-input__input' name={name} type='file' ref={inputRef} onChange={handleChange} accept={accept} />
      <button type='button' className='btn btn-secondary' onClick={handleControlClick}>
        {value ? t('ImageInput.update') : t('ImageInput.add')}
      </button>
    </div>
  </div>
}

export default ImageInput;
