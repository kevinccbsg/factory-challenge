import { Typography } from "antd";
import { useEffect, useState } from "react";
import { FeatureTable } from "../../components/FeatureTable/FeatureTable";
import { Part } from "../../models";
import { Status } from "../../components/ToleranceIcons/status";
import styles from "./Home.module.css";

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

  const getControlStatus = (deviation: number, tolerance: number) => {
    const deviationPercentage = Math.abs((deviation / tolerance) * 100);

    if (deviationPercentage <= 30) {
      return Status.OK;
    } else if (deviationPercentage <= 60) {
      return Status.WARNING;
    } else {
      return Status.ERROR;
    }
  };

  return (
    <main className={styles.container}>
      {parts.map((part) => (
        <div key={part.name}>
          <Typography.Title level={2}>{part.name}</Typography.Title>
          {part.features.map((feature, featureIndex) => (
            <FeatureTable
              key={`${part.name}-${featureIndex}`}
              title={feature.name}
              data={feature.controls.map((feature, index) => ({
                key: `${part.name}-${index}-${feature.control}`,
                control: feature.control,
                deviation: feature.deviation,
                devOutOftol: feature.devOutOftol,
                status: getControlStatus(feature.deviation, feature.tolerance),
              }))}
            />
          ))}
        </div>
      ))}
    </main>
  );
};

export default HomePage;
