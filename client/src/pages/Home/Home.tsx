import { Typography } from "antd";
import { FeatureTable } from "../../components/FeatureTable/FeatureTable";
import { useEffect, useState } from "react";
import { Part } from "../../models";

const HomePage = () => {
  const [parts, setParts] = useState<Part[]>([]);

  useEffect( () => {
    const events = new EventSource('/api/v1/parts/stream');

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
      {parts.map((part) => (
        <div key={part.name}>
          <Typography.Title level={1}>{part.name}</Typography.Title>
          {part.features.map((feature, featureIndex) => (
            <FeatureTable
              key={`${part.name}-${featureIndex}`}
              title={feature.name}
              data={feature.controls.map((feature, index) => ({
                key: `${part.name}-${index}-${feature.control}`,
                control: feature.control,
                deviation: feature.deviation,
                devOutOftol: feature.devOutOftol,
              }))}
            />
          ))}
        </div>
      ))}
    </main>
  );
};

export default HomePage;
