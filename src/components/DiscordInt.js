import React, { useState } from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/DiscordInt.css'

function DiscordInt() {

  const [isMinimized, setIsMinimized] = useState(false);

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className={`discord-container ${isMinimized ? 'minimized' : ''}`}>
      <div className="discord-iframe">
        <iframe
          src="https://discord.com/widget?id=573633846587817992&theme=dark"
          frameborder="0"
          title="Discord Widget"
        ></iframe>
      </div>
      <button className="discord-toggle" onClick={toggleMinimize}>
        <span>{isMinimized ? '▲' : '▼'}</span>
      </button>
    </div >
  );
};

export default DiscordInt
