import { Typography } from 'antd';
import { Trans, useTranslation } from 'react-i18next';
import { FeatureTable } from '../../components/FeatureTable/FeatureTable';
import { Status } from '../../components/ToleranceIcons/status';
import { Footer } from '../../components/Footer/Footer';
import { Part } from '../../models';
import useSSE from '../../hooks/useSSE';
import styles from './Home.module.css';

const HomePage = () => {
  const { t } = useTranslation();
  const { parts } = useSSE<Part>('/api/v1/parts/stream');

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
    if (hasError) return Status.ERROR;
    if (hasWarning) return Status.WARNING;
    return Status.OK;
  }

  return (
    <>
      <main className={styles.container}>
        <p>
          <Trans i18nKey="introduction">
            Factory is a web application that allows users to check the quality of various features and controls. With Factory, <strong>users can easily navigate through different parts of a hardware</strong> and assess the status of each feature's controls.
          </Trans>
        </p>
        <p>{t("description")}</p>
        {parts.map((part) => (
          <section className={styles.partContainer} key={part.name}>
            <Typography.Title level={2}>{part.name}</Typography.Title>
            <section className={styles.features}>
              {part.features.map((feature, featureIndex) => (
                <FeatureTable
                  key={`${part.name}-${featureIndex}`}
                  title={feature.name}
                  status={getGlobalStatus(feature.controls)}
                  data={feature.controls.map((feature, index) => ({
                    key: `${part.name}-${index}-${feature.control}`,
                    control: feature.control,
                    deviation: +feature.deviation.toFixed(2),
                    devOutOftol: +feature.devOutOftol.toFixed(2),
                    status: getControlStatus(feature.deviation, feature.tolerance),
                  }))}
                />
              ))}
            </section>
          </section>
        ))}
      </main>
      <Footer />
    </>
  );
};

export default HomePage;
