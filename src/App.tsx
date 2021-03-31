import React from "react";
import GlobalStyles from "styles/globalStyles";
import ContentLogo from "components/ContentLogo";
import Metrics from "components/Metrics";

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <ContentLogo />
      <Metrics />
    </div>
  );
};

export default App;
