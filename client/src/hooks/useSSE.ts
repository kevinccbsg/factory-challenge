import { useEffect, useState } from 'react';

const useSSE = <T>(url: string) => {
  const [parts, setParts] = useState<T[]>([]);
  useEffect( () => {
    const events = new EventSource(url);

    events.onmessage = (event) => {
      const parsedData = JSON.parse(event.data) as T[];
      setParts(parsedData);
    };

    return () => {
      events.close();
    };
  }, [url]);

  return { parts };
};

export default useSSE;
