import React from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from 'antd';
import './app-tabs.css';
interface ITabdata {
    icon: string;
    url: string;
}
const tabsData: ITabdata[] = [
    {icon: "appstore", url: '/'},
    {icon: "search", url: '/search'},
    {icon: "shopping", url: '/shop'},
    {icon: "cluster", url: '/tree'}
]

export const AppTabs: React.FC = () => (
    <div className="app-tabs">
        <div className="_tabs">
            {tabsData.map((tab, index) =>
                <NavLink 
                    to={tab.url} 
                    exact={true}
                    activeClassName="active"
                    key={"" + index} 
                    className={'_tab'}>
                    <Icon type={tab.icon}></Icon>
                </NavLink>
            )}
        </div>
    </div>
);