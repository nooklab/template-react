import React from 'react';
import Avatar from '../Avatar';

const TopNavUserButton = props => {
    const {avatarSrc, title} = props
    return <>
        {/*<a className="nav-link " href="#" id="navbarDarkDropdownMenuLink" role="button"*/}
        {/*   data-bs-toggle="dropdown" aria-expanded="false">*/}
        {/*    <Avatar src={avatarSrc} size='29px'/>*/}
        {/*    <span className='top-nav-user-button__title fw-bold'>{title}</span>*/}
        {/*</a>*/}
        <a className="nav-link btn btn-bl-primary" href="#" id="navbarDarkDropdownMenuLink" role="button"
           data-bs-toggle="dropdown" aria-expanded="false">
            {/*<Avatar src={avatarSrc} size='29px'/>*/}
            <span className="fw-bold">{title}</span>
        </a>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li><a className="dropdown-item" href="/campaign">내 캠페인</a></li>
            <li><a className="dropdown-item" href="/logout">로그아웃</a></li>
            {/*<li><a className="dropdown-item" href="#">Another action</a></li>*/}
            {/*<li><a className="dropdown-item" href="#">Something else here</a></li>*/}
        </ul>
    </>
}

export default TopNavUserButton;
