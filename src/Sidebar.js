import React, { useState, useEffect } from 'react'
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import { Link } from 'react-router-dom'

function Sidebar({ user }) {
    const url = '/' + user.displayName + '/' + user.uid;

    return (
        <div className="sidebar">
            <Link to={url}>
                <SidebarRow avatar ImageLink={user?.photoURL} title={user?.displayName} />
            </Link>

            <div class="contacts">
            <iframe src="https://discord.com/widget?id=834199209787392023&theme=dark" width="300" height="590" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>
            </div>
         
            <div class="hr" />
            <div class="policies">
                <p>Privacidad</p>
                <p class="dot">·</p>
                <p>Terminos</p>
                <p class="dot">·</p>
                <p>Publicidad</p>
                <p class="dot">·</p>
                <p>Anuncios</p>
                <i class="ads" />
                <p class="dot">·</p>
                <p>Cookies</p>
                <p class="dot">·</p>
                <p>Mas</p>
                <p class="dot">·</p>
                <p>Kahibalo © 2020</p>
            </div>
        </div>
    )
}

export default Sidebar
