import React from 'react'
import './SidebarRow.css'
import { Avatar } from '@material-ui/core'


function SidebarRow({src,title,url}) {
    return (
        <div className='sidebarRow'>
            {src && <Avatar src={src}/>}
            {url &&   <img src={url} alt={title} />}
          
            <h4>{title}</h4>
        </div>
    )
}

export default SidebarRow