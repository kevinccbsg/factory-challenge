import { Typography } from "antd";
import { useEffect, useState } from "react";
import { FeatureTable } from "../../components/FeatureTable/FeatureTable";
import { Part } from "../../models";
import { Status } from "../../components/ToleranceIcons/status";
import styles from "./Home.module.css";
import { Footer } from "../../components/Footer/Footer";

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

  const getGlobalStatus = (controls: { deviation: number, tolerance: number }[]) => {
    const hasError = controls.some((control) => 
      getControlStatus(control.deviation, control.tolerance) === Status.ERROR
    );
    const hasWarning = controls.some((control) =>
      getControlStatus(control.deviation, control.tolerance) === Status.WARNING
    );
    if (hasWarning) return Status.WARNING;
    if (hasError) return Status.ERROR;
    return Status.OK;
  }

  return (
    <>
      <main className={styles.container}>
        {parts.map((part) => (
          <div className={styles.partContainer} key={part.name}>
            <Typography.Title level={2}>{part.name}</Typography.Title>
            <div className={styles.features}>
              {part.features.map((feature, featureIndex) => (
                <FeatureTable
                  key={`${part.name}-${featureIndex}`}
                  title={feature.name}
                  status={getGlobalStatus(feature.controls)}
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
          </div>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
