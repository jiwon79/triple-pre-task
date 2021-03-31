import React from "react";
import styled from "styled-components";
import { METRICS_COLOR } from "constants/colors";

const MetricsContainer = styled.div`
  margin-bottom: 50px;
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
  return (
    <MetricsContainer>
      <MetricItem>
        <strong>350만 명</strong>의 사용자
      </MetricItem>
      <MetricItem>
        <strong>21만 개</strong>의 리뷰
      </MetricItem>
      <MetricItem>
        <strong>650만 개</strong>의 저장
      </MetricItem>
    </MetricsContainer>
  );
};

export default Metrics;
