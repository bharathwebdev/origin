import React from "react";
 import './menu-item.style.scss'
 const MenuItem = ({ title ,imageurl,size})=>(
    <div className={`${size} menu-item` } >
        <div className='background-img'style={{backgroundImage:`url(${imageurl})`}}/>
    <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="title">SHOP NOW</span>
    </div>
</div>
 )
 export default MenuItem;