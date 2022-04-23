import React from 'react'
import { storiesOf } from '@storybook/react';
import AspectRatioImage from './AspectRatioImage';

const imageSrc = 'https://static-cdn.jtvnw.net/jtv_user_pictures/68835227-9f13-4804-8142-4ee26e77d286-profile_banner-480.jpg';

storiesOf('UI/AspectRatioImage', module)
  .add('default', () => (<div className='row'>
    <div className='col-3'>
      <h3>1:1</h3>
      <AspectRatioImage src={imageSrc} ratio={1} />
    </div>

    <div className='col-3'>
      <h3>4:3</h3>
      <AspectRatioImage src={imageSrc} ratio={4/3} />
    </div>

    <div className='col-3'>
      <h3>16:9</h3>
      <AspectRatioImage src={imageSrc} ratio={16/9} />
    </div>

    <div className='col-3'>
      <h3>2:1</h3>
      <AspectRatioImage src={imageSrc} ratio={2/1} />
    </div>
  </div>));
 