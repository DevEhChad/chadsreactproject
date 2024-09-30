import React, { useState } from 'react';
import ReorderIcon from '@mui/icons-material/Reorder';
import '../styles/DiscordInt.css'

function DiscordInt() {

  const [openLinks, setOpenLinks] = useState(false);

  const toggleDiscordInt = () => {
    setOpenLinks(!openLinks);
  };
  return (
      <div className='discordint'>
        <div className='discord-opened' id={openLinks ? "open" : "close"}>
            <div className='hiddenLinks'>
            <div className='discordiframe'><iframe src="https://discord.com/widget?id=573633846587817992&theme=dark" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe></div>     
            </div>
            </div>
        <div className='discord-minimized'>
            <div className='discordiframe'><iframe src="https://discord.com/widget?id=573633846587817992&theme=dark" width="350" height="500" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe></div>
            <button onClick={toggleDiscordInt}>
                <ReorderIcon />
          </button>
        </div>
        </div>
  )
}

export default DiscordInt
