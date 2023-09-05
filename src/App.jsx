import { useState, useEffect, Suspense } from 'react'
import { BarLoader } from "react-spinners";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);
/* EFECTO LOADING*/
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
      <Suspense
      fallback={
        <div className="h-screen w-full flex items-center justify-center">
          <BarLoader color="#22c55e" height={4} />
        </div>
      }
    >
      {loading ? (
        <div className="h-screen w-full flex items-center justify-center">
          <BarLoader color="#22c55e" height={4} />
        </div>
      ) : (
        <Home />
      )}
    </Suspense>
  )
}

export default App
