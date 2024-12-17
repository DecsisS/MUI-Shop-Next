'use client'

import {AppBar, Toolbar, Typography} from "@mui/material";
import { redirect } from "next/navigation";
import { Dispatch, SetStateAction, useState } from "react";
import { Cart } from "./(cartButton)/(cart)/Cart";
import CartButton from "./(cartButton)/CartButton";
import MenuButton from "./(menuButton)/MenuButton";
import Menu from "./(menuButton)/(menu)/Menu";

const toggleDrawer = (state: boolean, setToggle: Dispatch<SetStateAction<boolean>>) => {
    return () => setToggle(!state);
}

const Header = () => {
    const [menuOpen, setMenuToggle] = useState(false);
    const [cartOpen, setCartToggle] = useState(false);

    const toggleDrawerCart = toggleDrawer(cartOpen, setCartToggle);
    const toggleDrawerMenu = toggleDrawer(menuOpen, setMenuToggle);

    return (
        <AppBar position="static">
            <Toolbar>
                <MenuButton handler={toggleDrawerMenu}/>
                <Typography
                    variant="h5"
                    component="span"
                    sx={{ flexGrow: 1, cursor: 'pointer' }}
                    onClick={() => redirect('/')}
                >
                    MUI Shop
                </Typography>
                <CartButton handler={toggleDrawerCart} />
            </Toolbar>
            <Cart cartOpen={cartOpen} toggleFunc={toggleDrawerCart} />
            <Menu menuOpen={menuOpen} toggleFunc={toggleDrawerMenu} />
            {/* <Link href="/">Home</Link>
                <Link href="/products">Products</Link>
                <Link href="/contacts">Contacts</Link>
                <Link href="/about">About us</Link> */}
        </AppBar>
    )
}

export default Header;