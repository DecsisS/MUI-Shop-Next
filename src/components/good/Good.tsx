import { Button, Card, CardActions, CardContent, CardMedia, Grid2, Typography } from '@mui/material';
import defaultImage from '@/assets/noImg.webp';
import { cartActionCreator, CartActionTypes, CartContext } from '@/data/context';
import { useContext } from 'react';

const Good = (props: {
    id?: string;
    name: string;
    category?: string;
    poster?: string;
    price: number;
}) => {
    const { dispatch } = useContext(CartContext);

    const addToCardAction = cartActionCreator(CartActionTypes.ADD, props);

    const addToCardHandler = () => {
        dispatch(addToCardAction)
    };

    return (
        <Grid2 size={{ xs: 12, sm: 6, md: 4 }}>
            <Card sx={{
                minWidth: 210,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
            }}>
                <div>
                    <CardMedia
                        component="img"
                        height="200"
                        alt={`${props.name}-poster`}
                        image={props.poster ? props.poster : defaultImage.src}
                    />
                    <CardContent>
                        <Typography variant='body1' component="div">
                            {props.name}
                        </Typography>
                    </CardContent>
                </div>
                <div>
                    <Typography
                        variant="h5"
                        component="span"
                        sx={{ paddingLeft: '16px' }}>
                        {`${props.price} RUB`}
                    </Typography>
                    <CardActions>
                        <Button variant="contained" onClick={addToCardHandler}>
                            Add to card
                        </Button>
                    </CardActions>
                </div>
            </Card>
        </Grid2>
    );
};

export default Good;