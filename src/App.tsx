import React from "react";
import styled from "styled-components";
import ContentLogo from "components/ContentLogo";
import Metrics from "components/Metrics";
import Award from "components/Award";
import GlobalStyles from "styles/globalStyles";

const ResponsiveContainer = styled.div`
  display: flex;
  align-items: center;
  min-width: 1200px;
  height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const InfoContainer = styled.div`
  margin-left: 220px;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <ResponsiveContainer>
          <ContentContainer>
            <ContentLogo />
            <InfoContainer>
              <Metrics />
              <Award />
            </InfoContainer>
          </ContentContainer>
        </ResponsiveContainer>
      </main>
    </>
  );
};

export default App;
