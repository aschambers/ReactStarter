import React from 'react';
import { css } from '@emotion/core';
import { FadeLoader } from 'react-spinners';

const Loading = (props) => {
  const override = css`
    display: block;
    margin: 0 auto;
    border-color: blue;
    position: fix;
    margin-top: ${props.marginTop ? props.marginTop : '50vh'};
  `;

  return (
    <div className='sweet-loading'>
      <FadeLoader
        css={override}
        heightUnit={"px"}
        widthUnit={"px"}
        height={15}
        width={5}
        radius={2}
        margin={"2px"}
        color={'#123abc'}
        loading={true}
      />
    </div>
  );
}

export default Loading;