'use client'

import { ShoppingBasket } from "@mui/icons-material";
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import CartItem from "./CartItem";
import { useContext } from "react";
import { CartContext } from "@/data/context";
import CartSum from "./CartSum";

export const Cart = (props: {
    cartOpen: boolean,
    toggleFunc: () => void}) => {

    const { state } = useContext(CartContext);

    return (
        <Drawer anchor='right' open={props.cartOpen} onClose={props.toggleFunc}>
            <List sx={{ width: '400px' }}>
                <ListItem>
                    <ListItemIcon>
                        <ShoppingBasket />
                    </ListItemIcon>
                    <ListItemText primary="Your cart" />
                </ListItem>
                <Divider />
                {state.goods.length !== 0
                    ? <>{state.goods.map((good: any) => {
                        return <CartItem key={good.id} good={good} />
                    })}
                        <Divider />
                        <CartSum order={state.goods} />
                    </>
                    : <ListItem>Cart is empty</ListItem>
                }
            </List>
        </Drawer>
    )
};