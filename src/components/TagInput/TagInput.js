import React, { useState, useEffect, useRef } from 'react';
import Popup from '../Popup';

/**
 * 태그 입력 컴포넌트
 * 
 * @param {Object} props 
 * @param {string} props.name
 * @param {string} props.value
 * @param {function} props.onChange
 * @param {function} props.onSearch 태그 검색 콜백
 * @param {any} props.props
 */
function TagInput({ name, value, onChange, onSearch, ...props }) {
  const debounceDuration = 300;
  const [searchValue, setSearchValue] = useState('');
  const [isListOpen, setIsListOpen] = useState(false);
  const [searchItems, setSearchItems] = useState([]);
  const ref = useRef();
  const disabled = value.length >= 5;

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (searchValue && onSearch) {
        const result = await onSearch(searchValue);
        setSearchItems(result);
        setIsListOpen(true);
      } else {
        setSearchItems([]);
      }
    }, debounceDuration);

    return () => {
      clearTimeout(timer);
    };
  }, [searchValue, onSearch]);

  function handleListToggle() {
    setIsListOpen(!isListOpen);
  }

  function handleSearchValueChange(e) {
    setSearchValue(e.target.value);
  }

  function handleItemClick(item) {
    addTagValue(item.tag);
    setSearchValue('');
    setIsListOpen(false);
  }

  function addTagValue(v) {
    if (value.indexOf(v) >= 0) {
      return;
    }

    if (onChange) {
      onChange({
        target: {
          name,
          value: [...value, v]
        }
      });
    }
  }

  function removeTagValue(v) {
    const idx = value.indexOf(v);

    if (idx >= 0 && onChange) {
      onChange({
        target: {
          name,
          value: [...value.slice(0, idx), ...value.slice(idx + 1, value.length)]
        }
      });
    }
  }

  function handleInputKeyDown(e) {
    if (searchValue && e.key === 'Enter') {
      e.stopPropagation();
      e.preventDefault();

      addTagValue(searchValue);
      setSearchValue('');
      setIsListOpen(false);
    }
  }

  return <div className='tag-input'>
    <div className='input-group' ref={ref}>
      <div className='input-group-prepend'>
        <span className='input-group-text'>
          <span className='fas fa-search' />
        </span>
      </div>

      <input
        className='form-control'
        type='text'
        name={name}
        value={searchValue}
        onChange={handleSearchValueChange} 
        onKeyDown={handleInputKeyDown}
        disabled={disabled}
        {...props}
      />
    </div>

    <ul className='tag-input__tags'>
      {value.map(tag => <li key={tag} className='tag-input__tags__item'>
        <span className='tag-input__tags__item__title'>{tag}</span>

        <button type='button' className='tag-input__tags__item__remove' onClick={() => removeTagValue(tag)}>
          <span className='fas fa-times' />
        </button>
      </li>)}
    </ul>

    <Popup targetRef={ref} placement='bottom-both' isOpen={isListOpen} onClickOutside={handleListToggle}>
      <div className='tag-input__list dropdown-menu show'>
        {searchItems.map((item, idx) => <div key={idx} className='dropdown-item'>
          <div className='tag-input__list__item' onClick={() => handleItemClick(item)}>
            <span className='tag-input__list__item__title'>{item.tag}</span>
          </div>
        </div>)}
      </div>
    </Popup>
  </div>;
}

export default TagInput;
