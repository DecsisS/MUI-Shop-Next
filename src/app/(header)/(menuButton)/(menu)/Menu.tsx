import { Colors } from '@/utils/styleConstants';
import { Drawer, MenuItem, MenuList } from '@mui/material';
import { redirect } from 'next/navigation';
import React from 'react'

interface Props {
    menuOpen: boolean,
    toggleFunc: () => void
}

const Menu = (props: Props) => {
    const redirectAndCloseMenu = (url: string) => () => {
        props.toggleFunc();
        redirect(url);
    }

    return (
        <Drawer 
        anchor='left'
        open={props.menuOpen}
        onClose={props.toggleFunc}>
            <MenuList variant="selectedMenu" sx={{ 
                width: '240px', 
                color: Colors.primary
                }}>
                <MenuItem onClick={redirectAndCloseMenu('/')}>Home</MenuItem>
                <MenuItem onClick={redirectAndCloseMenu('/products')}>Products</MenuItem>
                <MenuItem onClick={redirectAndCloseMenu('/contacts')}>Contacts</MenuItem>
                <MenuItem onClick={redirectAndCloseMenu('/using-terms')}>Terms of Use</MenuItem>
                <MenuItem onClick={redirectAndCloseMenu('/about')}>About us</MenuItem>
                <MenuItem onClick={redirectAndCloseMenu('/privacy-policy')}>Privacy Policy</MenuItem>
            </MenuList>
        </Drawer>
    );
}

export default Menu
