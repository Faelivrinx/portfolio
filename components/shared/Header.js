import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import '../../styles/main.scss';

class Header extends Component {
    render() {
        const title = this.props.children;

        return (
            <Fragment>
            <p>{title}</p>
            <p className='customClassFromFile'>This is style class</p>
                <Link href="/">
                    <a>Home</a>
                </Link>
                <Link href="/about">
                    <a>About</a>
                </Link>
                <Link href="/portfolios">
                    <a>Portfolios</a>
                </Link>
                <Link href="/blogs">
                    <a>Blog</a>
                </Link>
                <Link href="/cv">
                    <a>Cv</a>
                </Link>
            </Fragment>
        );
    }
}

export default Header;