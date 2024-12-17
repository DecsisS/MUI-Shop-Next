import { Menu } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

interface Props {
    handler: () => void;
}

const MenuButton = (props: Props) => {
    const { handler } = props

    return (
        <IconButton
            onClick={handler}>
            <Menu />
        </IconButton>
    )
}

export default MenuButton
