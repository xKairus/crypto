import { Layout } from "antd";

import AppHeader from "./components/layout/AppHeader";
import AppContent from "./components/layout/AppContent";
import AppSider from "./components/layout/AppSider";

const App = () => (
  <Layout>
    <AppHeader />
    <Layout>
      <AppSider />
      <AppContent />
    </Layout>
  </Layout>
);
export default App;
