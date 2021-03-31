import React from "react";
import styled from "styled-components";
import useFadeIn from "hooks/useFadeIn";
import { FadeInProps } from "types/fadeIn";
import { TRIPLE_LOGO_IMG } from "constants/images";
import { CONTENT_LOGO_COLOR } from "constants/colors";

const ContentLogoContainer = styled.div<FadeInProps>`
  width: 400px;
  height: 338px;
  padding-top: 280px;
  background-image: url(${TRIPLE_LOGO_IMG});
  background-repeat: no-repeat;
  background-size: 400px 338px;
  text-align: center;
  font-family: sans-serif;
  font-size: 15px;
  font-weight: bold;
  color: ${CONTENT_LOGO_COLOR};
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transform: translateY(${(props) => (props.transY ? "0px" : "10px")});
  transition: all 700ms ease-in-out 0ms;
`;

const ContentLogo: React.FC = () => {
  const [opacity, transY] = useFadeIn();

  return (
    <ContentLogoContainer isVisible={opacity} transY={transY}>
      2019년 2월 기준
    </ContentLogoContainer>
  );
};

export default ContentLogo;
