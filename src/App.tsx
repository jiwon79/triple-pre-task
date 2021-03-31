import React from "react";
import GlobalStyles from "styles/globalStyles";
import ContentLogo from "components/ContentLogo";

const App: React.FC = () => {
  return (
    <div>
      <GlobalStyles />
      <ContentLogo />
    </div>
  );
};

export default App;
