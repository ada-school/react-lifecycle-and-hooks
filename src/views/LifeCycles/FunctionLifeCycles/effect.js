import React, { useState, useEffect } from "react";

export default function ContextSection(props) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, [time]);

  return (
    <div>
      <h3>useEffect</h3>
      <div>
        <span>{time.toLocaleTimeString()}</span>
      </div>
    </div>
  );
}
