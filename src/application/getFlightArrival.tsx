import { useEffect, useState } from 'react';
import axios from 'axios';

const useFlightArrival = () => {
  const [flightData, setFlightData] = useState();

  const fetchFlightArrival = async () => {
    const res = await axios.get(
      'https://tdx.transportdata.tw/api/basic/v2/Air/FIDS/Airport/Arrival/TPE?$orderby=ScheduleArrivalTime&$format=JSON',
    );
    if(res.status >= 200 && res.status < 300) {
      setFlightData(res.data);
    } else {
      alert("取得航班資訊失敗: " + res.status + " - " + res.statusText);
    }
  };

  useEffect(() => {
    fetchFlightArrival();
  }, []);

  return {
    flightData,
    fetchFlightArrival,
  }
};

export default useFlightArrival;
