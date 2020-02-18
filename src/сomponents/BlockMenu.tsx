import React from "react"

export const BlockMenu: React.FunctionComponent = () => {
    return (
        <ul className={'block-menu'}>
            <li>
                <a href={'https://github.com/'}>
                    <i className=" fas fa-home "></i>
                </a>
            </li>
            <li><a href={'https://github.com/'}>
                <i className="fas fa-bars size-icon"></i>
            </a>
            </li>
            <li><a href={'https://github.com/'}>
                <i className="fas fa-chart-line size-icon"></i>
            </a>
            </li>

            <li><a href={'https://github.com/'}>
                <i className="fas fa-envelope size-icon"></i>
            </a>
            </li>
            <li><a href={'https://github.com/'}>
                <i className="fas fa-user-friends size-icon"></i>
            </a>
            </li>
        </ul>
    );
}

