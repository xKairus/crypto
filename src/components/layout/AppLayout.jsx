import { Layout, Spin } from "antd";
import { useContext } from "react";

import AppContent from "./AppContent";
import AppHeader from "./AppHeader";
import AppSider from "./AppSider";
import CryptoContext from "../../context/crypto-context";

export default function AppLayout() {
  const { loading } = useContext(CryptoContext);

  if (loading) {
    return <Spin spinning fullscreen />;
  }
  return (
    <Layout>
      <AppHeader />
      <Layout>
        <AppSider />
        <AppContent />
      </Layout>
    </Layout>
  );
}
