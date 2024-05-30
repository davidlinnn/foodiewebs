import React, { useState, useEffect } from 'react';

function Clock() {
  const [currentTime, setCurrentTime] = useState('');

  useEffect(() => {
    fetchTime();
    const interval = setInterval(fetchTime, 1000); 
    return () => clearInterval(interval); 
  }, []);

  const fetchTime = async () => {
    try {
      const response = await fetch("http://worldtimeapi.org/api/timezone/Europe/Budapest");
      const data = await response.json();
      const { datetime } = data;
      setCurrentTime(datetime);
    } catch (error) {
      console.error('Error fetching time:', error);
    }
  };

  const formatTime = (time) => {
    const date = new Date(time);
    return date.toLocaleTimeString();
  };

  return (
    <div>
      
      <p>{formatTime(currentTime)}</p>
    </div>
  );
}

export default Clock;
