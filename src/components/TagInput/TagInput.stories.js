import React, { useState } from 'react'
import { storiesOf } from '@storybook/react';
import TagInput from './TagInput';

const mockTagResults = [
  {
    title: '젤다'
  }, {
    title: '배그'
  }, {
    title: '포커'
  }, {
    title: '슈퍼마리오'
  }, {
    title: '너의이름은'
  }
];

function DefaultTagInput({ tagResults }) {
  const [value, setValue] = useState([]);

  function handleChange(e) {
    setValue(e.target.value);
  }

  async function handleSearch() {
    return tagResults;
  }

  return <TagInput value={value} onChange={handleChange} onSearch={handleSearch} />;
}

storiesOf('UI/TagInput', module)
  .add('default', () => (<div className='w-25 p-2'>
    <DefaultTagInput tagResults={mockTagResults} />
  </div>));
