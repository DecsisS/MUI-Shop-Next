'use client'

import { cartActionCreator, CartActionTypes, CartContext } from "@/data/context";
import { Close } from "@mui/icons-material";
import { IconButton, ListItem, Typography } from "@mui/material";
import { FC, PropsWithChildren, useContext } from "react";

const CartItem: FC<PropsWithChildren<{
    key: string,
    good: { name: string; price: number; count: number; id: string; }
}>> = (props) => {
    
    const { dispatch } = useContext(CartContext);

    const cartDelAction = cartActionCreator(CartActionTypes.DEL, {id: props.good.id});

    const delHandler = () => { 
        dispatch(cartDelAction); 
    };

    return (
        <ListItem>
            <Typography variant='body2'>
                {props.good.name} {props.good.price} RUB x {props.good.count}
            </Typography>
            <IconButton
                onClick={delHandler}>
                <Close />
            </IconButton>
        </ListItem>
    )
};

export default CartItem;