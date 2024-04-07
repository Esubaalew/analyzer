
import './App.css';
import ComingSoon from './components/ComingSoon';
import { Analytics } from "@vercel/analytics/react"
function App() {
  return (
    <div className="App">
      <ComingSoon />
      <Analytics />
    </div>
  );
}

export default App;
