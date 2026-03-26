import { useNavigation } from "react-router-dom";
import { useEffect, useState } from "react";
import Loader from "./Loader";

export default function PageLoader() {
  const navigation = useNavigation();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (navigation.state === "loading") {
      setLoading(true); 
    } else {
      
      const timer = setTimeout(() => setLoading(false), 500);
      return () => clearTimeout(timer);
    }
  }, [navigation.state]);

  return <Loader loading={loading} />;
}