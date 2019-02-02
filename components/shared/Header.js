import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink
} from 'reactstrap';


const BsNavLink = (props) => {
    const {route, title} = props;
    return ( 
        <Link href={route}><a className="nav-link port-navbar-link">{title}</a></Link>
     );
}
 

class Header extends Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {

        return (
            // <Fragment>
            // <Link href="/">
            //     <a>Home</a>
            // </Link>
            //     <Link href="/about">
            //         <a>About</a>
            //     </Link>
            //     <Link href="/portfolios">
            //         <a>Portfolios</a>
            //     </Link>
            //     <Link href="/blogs">
            //         <a>Blog</a>
            //     </Link>
            //     <Link href="/cv">
            //         <a>Cv</a>
            //     </Link>
            // </Fragment>
            <div>
                <Navbar className="port-navbar port-default absolute" color="transparent" dark light expand="md">
                    <NavbarBrand className="port-navbar-brand" href="/">Dominik Jurasz</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem className="port-navbar-item">
                                <BsNavLink route="/" title="Home"/>
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsNavLink route="/about" title="About"/>
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsNavLink route="/portfolios" title="Portfolios"/>
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsNavLink route="/blogs" title="Blog"/>
                            </NavItem>
                            <NavItem className="port-navbar-item">
                                <BsNavLink route="/cv" title="Cv"/>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default Header;