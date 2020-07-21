import React from 'react'
import {useHistory} from 'react-router-dom'
import { routes } from '../../constants/index'
import './header.css'

const itemsData = [
    {
        title: 'Search',
        redirectionLink: routes.home
    },
    {
        title: 'Merchants',
        redirectionLink: routes.merchants
    },
    {
        title: 'coupons',
        redirectionLink: routes.coupons
    },
    {
        title: 'community',
        redirectionLink: routes.community
    },
    {
        title: 'size guide',
        redirectionLink: routes.sizeGuide
    },
    {
        title: 'blog',
        redirectionLink: routes.blog
    }
];

const Header = () => {

    let history = useHistory()

    return (
        <header className="main_header">
            {itemsData.map((element, index) => (
                <h3 className="main_header_elements" key={index} onClick={() => history.push(element.redirectionLink)}>{element.title}</h3>
            ))}
        </header>
    )
    

}

export default Header