import { cartActionCreator, CartActionTypes, CartContext } from '@/data/context';
import { Close } from '@mui/icons-material';
import { IconButton, Snackbar } from '@mui/material'
import React, { useContext } from 'react'


const Notification = () => {
    const { state, dispatch } = useContext(CartContext);

    const cartAction = cartActionCreator(CartActionTypes.CLOSE_NOTIFY);

    // const handleClose = (
    //     event: SyntheticEvent | Event,
    //     reason?: SnackbarCloseReason,
    // ) => {
    //     if (reason === 'clickaway') {
    //         return;
    //     }
    //     dispatch(cartAction);
    // }

    const handleClose = () => {
        dispatch(cartAction);
    }

    const snackBarAction = (
        <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={handleClose}
        >
            <Close fontSize="small" />
        </IconButton>
    );

    return (
        <Snackbar
            open={Boolean(state.notification)}
            autoHideDuration={2000}
            onClose={handleClose}
            message={state.notification}
            action={snackBarAction}
        >
            {/* <Alert /> */}
        </Snackbar>
    )
}

export default Notification
