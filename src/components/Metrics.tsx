import React from "react";
import styled from "styled-components";
import useFadeIn from "hooks/useFadeIn";
import useCountUp from "hooks/useCountUp";
import { FadeInProps } from "types/fadeIn";
import { METRICS_COLOR } from "constants/colors";

const MetricsContainer = styled.div<FadeInProps>`
  margin-bottom: 50px;
  opacity: ${(props) => (props.isVisible ? "1" : "0")};
  transform: translateY(${(props) => (props.transY ? "0px" : "10px")});
  transition: all 700ms ease-in-out 100ms;
`;

const MetricItem = styled.div`
  margin-bottom: 20px;
  font-family: sans-serif;
  font-size: 36px;
  color: ${METRICS_COLOR};
  letter-spacing: -1px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

const Metrics: React.FC = () => {
  const [opacity, transY] = useFadeIn();
  const userCount = useCountUp(350);
  const reviewCount = useCountUp(21);
  const storeCount = useCountUp(650);

  return (
    <MetricsContainer isVisible={opacity} transY={transY}>
      <MetricItem>
        <strong>{userCount}만 명</strong>의 사용자
      </MetricItem>
      <MetricItem>
        <strong>{reviewCount}만 개</strong>의 리뷰
      </MetricItem>
      <MetricItem>
        <strong>{storeCount}만 개</strong>의 저장
      </MetricItem>
    </MetricsContainer>
  );
};

export default Metrics;
