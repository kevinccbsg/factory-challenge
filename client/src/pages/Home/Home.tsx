import { Typography } from "antd";
import { FeatureTable } from "../../components/FeatureTable/FeatureTable";

const HomePage = () => {
  return (
    <main>
      <Typography.Title level={1}>Feature Table</Typography.Title>
      <FeatureTable />
    </main>
  );
};

export default HomePage;
