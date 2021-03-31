import React from "react";
import styled from "styled-components";
import { TRIPLE_LOGO_IMG } from "constants/images";

const ContentLogoContainer = styled.div`
  width: 400px;
  height: 338px;
  padding-top: 280px;
  background-image: url(${TRIPLE_LOGO_IMG});
  background-repeat: no-repeat;
  background-size: 400px 338px;
  text-align: center;
  font-family: sans-serif;
  font-size: 15px;
  color: rgba(58, 58, 58, 0.7);
`;

const ContentLogo: React.FC = () => {
  return <ContentLogoContainer>2019년 2월 기준</ContentLogoContainer>;
};

export default ContentLogo;
