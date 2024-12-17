import { Button, ListItem, Typography } from '@mui/material'
import React from 'react'

function calculateSumOfOrder(order: any[]): number {
    return order.reduce((acc, good) => {
        acc += good.price * good.count
        return acc;
    }, 0);
}

const CartSum = (props: {order: any[]}) => {
    const result = calculateSumOfOrder(props.order);
    return (
        <ListItem sx={{
            display: 'flex',
            justifyContent: 'space-around',
            }}>
            <Typography variant='body1' color='primary' sx={{ fontWeight: 700 }}>
                Result:
            </Typography>
            <Typography> {result} RUB</Typography>
            <Button variant="contained">
                Make the order
            </Button>
        </ListItem>
    )
}

export default CartSum
