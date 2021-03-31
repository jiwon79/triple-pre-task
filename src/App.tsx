import React from "react";
import styled from "styled-components";
import ContentLogo from "components/ContentLogo";
import Metrics from "components/Metrics";
import Award from "components/Award";
import GlobalStyles from "styles/globalStyles";

const ResponsiveContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 1200px;
  height: 100%;
  margin: 0 auto;
`;

const ContentContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <main>
        <ResponsiveContainer>
          <ContentContainer>
            <ContentLogo />
            <div>
              <Metrics />
              <Award />
            </div>
          </ContentContainer>
        </ResponsiveContainer>
      </main>
    </>
  );
};

export default App;
