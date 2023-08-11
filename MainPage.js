import React, { useState, useRef } from 'react'; // Fixed line
import Navbar from './Navbar.js';


const videoIds = [
    'ZNCRXQ5oOaI',
    'ZhpNlMroYYE',
    'ttJ1lJAFgLU',
    'sF1LEV-kgUA',
    '-b1BHlg_zJs',
    'K_SwnmsJMy4',
    'J-fUkgWbZWw',
    'HQf4qZYFzyU',
    'Mg9QfwFyqU4'
];

const categories = {
    'Action': [videoIds[8], videoIds[7]],
    'Beautiful': [videoIds[5], videoIds[3], videoIds[7]],
    'Gaming': [videoIds[1], videoIds[2], videoIds[6]],

    // Add more categories as needed
};
function YoutubeVideo({ videoId, isHovered }) {
    const iframeRef = useRef(null);
  
    const handleVideoClick = () => {
      if (iframeRef.current) {
        if (iframeRef.current.requestFullscreen) {
          iframeRef.current.requestFullscreen();
        } else if (iframeRef.current.mozRequestFullScreen) { /* Firefox */
          iframeRef.current.mozRequestFullScreen();
        } else if (iframeRef.current.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
          iframeRef.current.webkitRequestFullscreen();
        } else if (iframeRef.current.msRequestFullscreen) { /* IE/Edge */
          iframeRef.current.msRequestFullscreen();
        }
      }
    };
  
    const videoSrc = `https://www.youtube.com/embed/${videoId}${isHovered ? '?autoplay=1&mute=1' : ''}`;
  
    return (
      <div className="video-preview" onClick={handleVideoClick}>
        <iframe
          ref={iframeRef}
          key={isHovered} // Adding key to force reload on hover
          width="100%"
          height="100%"
          src={videoSrc}
          title={`YouTube video player ${videoId}`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
  
  function VideoGallery({ onHover, onMouseLeave }) {
    return (
      <div className="video-gallery">
        {Object.keys(categories).map((category, index) => (
          <div key={index} className="category">
            <h3>{category}</h3>
            <div className="videos">
              {categories[category].map(videoId => (
                <div
                  key={videoId}
                  onMouseEnter={() => onHover(videoId)}
                  onMouseLeave={onMouseLeave}
                >
                  <YoutubeVideo videoId={videoId} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  }
 
  function MainPage() {
    const [view, setView] = useState('home');
    const [previewVideo, setPreviewVideo] = useState(null);
  
    function handleHomeClick() {
      setView('home');
    }
  
    function handleAboutClick() {
      setView('about');
    }
  
    function handleContactClick() {
      setView('contact');
    }
  
    function handleHover(videoId) {
      setPreviewVideo(videoId);
    }
  
    function handleMouseLeave() {
      setPreviewVideo(null);
    }
  
    return (
      <div className="main-page">
        <Navbar
          onHome={handleHomeClick}
          onAbout={handleAboutClick}
          onContact={handleContactClick}
        />
        {view === 'home' && (
          <div>
            <div className="preview-section">
              {previewVideo && (
                <Preview videoId={previewVideo} />
              )}
            </div>
            <VideoGallery onHover={handleHover} onMouseLeave={handleMouseLeave} />
          </div>
        )}
        {view === 'about' && (
          <div>
            <h1>About Us</h1>
            <p>This is my first reactJS project, it isnt much but its mine!</p>
          </div>
        )}
        {view === 'contact' && (
          <div>
            <h1>Contact Me</h1>
            <p>Reach out to us at: seandiaz6561@gmail.com</p>
          </div>
        )}
      </div>
    );
  }
  function Preview({ videoId }) {
    const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
  
    return (
      <div className="hover-preview">
        <iframe
          src={videoSrc}
          style={{ border: 'none' }} // Removing any borders
          allow="autoplay"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
  
  export default MainPage;