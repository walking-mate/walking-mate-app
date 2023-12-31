/* 현재는 사용하지 않는 코드입니다.*/

/**
 * @파일명 Image.js
 * @작성자 이수
 * @작성일 2023-07-23
 * @코드설명
 *   사용자의 프로필 이미지를 출력하는 Image 컴포넌트를 정의합니다.
 *   사용자가 이미지를 설정하지 않았다면 기본 이미지를 출력합니다.
 *   PropTypes를 이용해 props의 유효성을 검사합니다.
 */

import React from 'react';
import styled from 'styled-components/native';
import PropTypes from 'prop-types';

const Container = styled.View`
  margin-bottom: 30px;
`;

const ProfileImage = styled.Image`
  background-color: ${({ theme }) => theme.imgBackground};
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

const DefaultImage = styled.Image`
  background-color: gray;
  width: 100px;
  height: 100px;
  border-radius: 50px;
`;

// Image 컴포넌트를 정의합니다. 사용자가 이미지를 설정하지 않았다면 기본 이미지를 출력합니다.
const Image = ({ source }) => {
  const defaultSource = require('../../assets/icon-user.png');

  return (
    <Container>
      {source ? (
        <ProfileImage source={source} />
      ) : (
        <DefaultImage source={defaultSource} />
      )}
    </Container>
  );
};

Image.propTypes = {
  source: PropTypes.object,
};

export default Image;
