import React from "react";
import GlobalStyles from "styles/globalStyles";
import ContentLogo from "components/ContentLogo";
import Metrics from "components/Metrics";
import Award from "components/Award";

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <ContentLogo />
      <Metrics />
      <Award />
    </div>
  );
};

export default App;
