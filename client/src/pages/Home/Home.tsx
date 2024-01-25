import { Typography } from "antd";
import { FeatureTable } from "../../components/FeatureTable/FeatureTable";
import { useEffect, useState } from "react";
import { Part } from "../../models";

const HomePage = () => {
  const [parts, setParts] = useState<Part[]>([]);

  useEffect( () => {
    const events = new EventSource('/api/v1/test');

    events.onmessage = (event) => {
      const parsedData = JSON.parse(event.data) as Part[];
      setParts(parsedData);
    };

    return () => {
      events.close();
    };
  }, []);

  return (
    <main>
      <Typography.Title level={1}>Feature Table</Typography.Title>
      {parts.map((part) => (
        <FeatureTable
          key={part.name}
          title={part.name}
          data={part.features.map((feature, index) => ({
            key: `${part.name}-${index}-${feature.control}`,
            control: feature.control,
            deviation: feature.deviation,
            devOutOftol: feature.devOutOftol,
          }))}
        />
      ))}
    </main>
  );
};

export default HomePage;
