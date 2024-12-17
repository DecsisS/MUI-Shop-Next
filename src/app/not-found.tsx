import { Box, Typography } from "@mui/material";

export default async function Page404() {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: '8rem',
        }}>
            <Typography variant="caption">Oops!</Typography>
            <Typography variant="h4" component="div">
                404 - Page not found
            </Typography>
        </Box>
    )
}