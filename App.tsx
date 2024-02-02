import React from "react";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "@gluestack-ui/config";
import RNModal from "./rnModal";
import GluestackModal from "./gluestackModal";

const App = () => {
  return (
    <GluestackUIProvider config={config}>
      {/* <RNModal /> */}
      <GluestackModal/>
    </GluestackUIProvider>
  );
};

export default App;
