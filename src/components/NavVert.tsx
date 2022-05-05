import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'
import Icon from '../widgets/Icon'

const NavVert = () => {
    const route = useRouter()
    // console.clear()
    console.log('rr =' + route.pathname)
    const menuVert = [
        {
            icon: 'home',
            text: 'Acceuil',
            link: '/',
            active: route.pathname == '/',
        },
        {
            icon: 'user-circle',
            text: 'Gestion de Clients',
            link: '/manager/ClientManager',
            active: route.pathname == '/manager/ClientManager',
        },
        {
            icon: 'truck',
            text: 'Gestion de Fournisseurs',
            link: '/manager/VendorManager',
            active: route.pathname == '/manager/VendorManager',
        },
        {
            icon: 'shopping-bag',
            text: "gestion d'achats",
            link: '/manager/PurchaseManager',
            active: route.pathname == '/manager/PurchaseManager',
        },
        {
            icon: 'home',
            text: 'eeeeeeeeee',
            link: '/',
            active: route.pathname == '/ee',
        },
        {
            icon: 'home',
            text: 'eeeeeeeeee',
            link: '/',
            active: route.pathname == '/ee',
        },
        {
            icon: 'home',
            text: 'eeeeeeeeee',
            link: '/',
            active: route.pathname == '/ee',
        },
        {
            icon: 'home',
            text: 'eeeeeeeeee',
            link: '/',
            active: route.pathname == '/ee',
        },
        {
            icon: 'home',
            text: 'eeeeeeeeee',
            link: '/',
            active: route.pathname == '/ee',
        },
        {
            icon: 'home',
            text: 'eeeeeeeeee',
            link: '/',
            active: route.pathname == '/ee',
        },
        {
            icon: 'home',
            text: 'eeeeeeeeee',
            link: '/',
            active: route.pathname == '/ee',
        },
        {
            icon: 'home',
            text: 'eeeeeeeeee',
            link: '/',
            active: route.pathname == '/ee',
        },
    ]

    return (
        <ul className="nav-horiz bg-cyan-800">
            <h2 className="bg-cyan-900">GESTION COMMERCIAL </h2>
            {menuVert.map((item) => (
                <li
                    key={item.icon}
                    className={item.active ? 'li-active' : 'li-free'}
                >
                    <Link href={item.link}>
                        <a>
                            <span className="icon">
                                <Icon i={item.icon} cl="" />
                            </span>
                            <span className="text">{item.text}</span>
                        </a>
                    </Link>
                </li>
            ))}
            <img src="/images/logo.png" alt="" />
        </ul>
    )
}

export default NavVert
