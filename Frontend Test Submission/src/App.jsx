import { useState } from "react";
import ShortenerPage from "./pages/ShortenerPage";
import StatisticsPage from "./pages/StatisticsPage";

function App() {
  const [statsData, setStatsData] = useState(null);

  return (
    <div className="min-h-screen bg-white text-gray-800 p-6">
      
      <ShortenerPage setStatsData={setStatsData} />
     
      
      <StatisticsPage data={statsData} />

    </div>
  );
}

export default App;
