import { Typography } from "antd";
import { FeatureTable } from "../../components/FeatureTable/FeatureTable";
import { useEffect, useState } from "react";
import { Part } from "../../models";
import { ROUTES } from "../../constants/Route.constant";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const [parts, setParts] = useState<Part[]>([]);
  const [listening, setListening] = useState(false);
  const navigate = useNavigate();

  useEffect( () => {
    if (!listening) {
      const events = new EventSource('http://localhost:4001/api/v1/test');

      events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data) as Part[];
        setParts(parsedData);
      };

      events.onerror = () => {
        navigate(ROUTES.ERROR);
      };

      setListening(true);
    }
  }, [listening, navigate]);

  return (
    <main>
      <Typography.Title level={1}>Feature Table</Typography.Title>
      {parts.map((part) => (
        <FeatureTable key={part.name} />
      ))}
    </main>
  );
};

export default HomePage;
