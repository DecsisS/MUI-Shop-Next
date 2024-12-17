'use client'

import { CartContext } from '@/data/context';
import { ShoppingBasket } from '@mui/icons-material'
import { Badge, IconButton } from '@mui/material'
import React, { useContext } from 'react'

interface Props {
    handler: () => void;
}

function calculateGoodsCount(order: any[]) {
    return order.reduce((acc, good) => {
        acc += good.count
        return acc;
    }, 0);
}

const CartButton = (props: Props) => {
    const { handler } = props;

    const { state } = useContext(CartContext);
    const goodsCount = calculateGoodsCount(state.goods);

    return (
        <IconButton
            color="inherit"
            onClick={handler}
        >
            <Badge
                color="secondary"
                badgeContent={goodsCount}>
                <ShoppingBasket />
            </Badge>
        </IconButton>
    )
}

export default CartButton
