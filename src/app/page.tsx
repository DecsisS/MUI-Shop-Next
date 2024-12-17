import { Box, Typography } from "@mui/material";
import { AddShoppingCart } from "@mui/icons-material";

export default function Home() {
  return (
    <Box sx={{ 
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '2rem',
      padding: '3rem'
      }}>
      <Typography variant="h3" sx={{ textAlign: 'center' }}>
        Hello! We are The Material UI Shop, really excited to see you in our shop. Let&aposs go to shopping!
      </Typography>
      <AddShoppingCart color="primary" sx={{ width: '200px', height: '200px' }} />
    </Box>
  );
}
