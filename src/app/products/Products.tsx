'use client'

import styles from './products.module.scss';
import { goods } from '@/data/goods';
import Good from '@/components/good/Good';
import Search from '@/components/search/Search';
import { useState } from 'react';
import { Grid2, Typography } from '@mui/material';
// import { useParams, usePathname, useRouter, useSearchParams } from 'next/navigation';

export function Products() {
    const [goodsArray, setGoodsArray] = useState(goods);

    const searchHandler = (event: any) => {
        if (!event.target.value) return setGoodsArray(goods)
        
        setGoodsArray(goods.filter((good) => {
            return good.name.toLowerCase().includes(event.target.value.toLowerCase())
        }));
    };

    return (
        <div className={styles.productsContainer}>
            <Typography variant='h4' component='span'>
                Products
            </Typography>
            <Search searchHandler={searchHandler}/>
            <Grid2 container spacing={2} sx={{ flexGrow: 1 }}>
                {goodsArray.length !== 0
                    ? goodsArray.map((good: any) => {
                        return (
                            <Good {...good} key={good.id} />
                        )
                    })
                    : <Typography variant='subtitle1' component='div' color='primary'>
                        Nothing was found
                    </Typography>
                }
            </Grid2>
        </div>
    )
};

// export const getApiToken = async () => {
//     'use server'

//     console.log(process.env.TOKEN);
// };