import React from "react";
import styled from "styled-components";
import { TRIPLE_LOGO_IMG } from "constants/images";
import { CONTENT_LOGO_COLOR } from "constants/colors";

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
  color: ${CONTENT_LOGO_COLOR};
`;

const ContentLogo: React.FC = () => {
  return <ContentLogoContainer>2019년 2월 기준</ContentLogoContainer>;
};

export default ContentLogo;
