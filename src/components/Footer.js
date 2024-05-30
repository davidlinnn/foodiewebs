import React, { useState, useEffect } from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = () => {
    fetch("https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=10&playlistId=PLAdSuESvzRSmkD31aBcN8v_U0lKxzc7q0&key=AIzaSyD8RNlrfAOcXdZB2eyI1pdJNz9k1K_SeHI")
      .then((res) => res.json())
      .then((data) => {
        setVideos(data.items);
      })
      .catch((error) => {
        console.error('Error fetching videos:', error);
      });
  };

  return (
    <div className='footer-container'>
      <h2 className='footer-title'>Lagu Daerah Sumatera Barat</h2>
      <section>
        {videos?.map((video) => (
          <a
            key={video.snippet.resourceId.videoId}
            target="_blank"
            href={`https://www.youtube.com/watch?v=${video.snippet.resourceId.videoId}`}
            className="yt-video"
          >
            <img src={video.snippet.thumbnails.maxres.url} alt={video.snippet.title} />
            <h3>{video.snippet.title}</h3>
          </a>
        ))}
      </section>
    </div>
  );
}

export default Footer;
