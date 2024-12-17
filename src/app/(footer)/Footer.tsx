import { convertorRGBToHex } from "@/utils/rgbToHex";
import { Colors } from "@/utils/styleConstants";
import { Facebook, LinkedIn, Telegram, YouTube } from "@mui/icons-material";
import { Box, Container, Grid2, IconButton, Link, Typography } from "@mui/material";

const Footer = () => {
    return (
        <Box
            bgcolor={convertorRGBToHex(Colors.primary)}
            component="footer"
            sx={{
                width: '100%',
                marginTop: '40px',
                color: 'white',
                padding: '20px',
            }}>
            <Container>
                <Grid2 container spacing={2} justifyContent="space-between">
                    <Grid2 sx={{ xs: 12, sm: 4 }}>
                        <Typography variant="h6">MUI</Typography>
                        <Link href="/about" color="textSecondary">
                            <Typography variant="body2">
                                About us
                            </Typography>
                        </Link>
                        <Link href="/contacts" color="textSecondary">
                            <Typography variant="body2">
                                Contacts
                            </Typography>
                        </Link>
                    </Grid2>
                    <Grid2 sx={{ xs: 12, sm: 4 }}>
                        <Typography variant="h6">Links</Typography>
                        <Link href="/privacy-policy" color="textSecondary">
                            <Typography variant="body2">
                                Privacy Policy
                            </Typography>
                        </Link>
                        <Link href="/using-terms" color="textSecondary">
                            <Typography variant="body2">
                                Terms of Use
                            </Typography>
                        </Link>
                    </Grid2>
                    <Grid2 sx={{ xs: 12, sm: 4 }}>
                        <Typography variant="h6" sx={{ paddingLeft: '10px'}}>Follow us</Typography>
                        <IconButton>
                            <Facebook />
                        </IconButton>
                        <IconButton>
                            <YouTube />
                        </IconButton>
                        <IconButton>
                            <LinkedIn />
                        </IconButton>
                        <IconButton>
                            <Telegram />
                        </IconButton>
                    </Grid2>
                </Grid2>
                <Box sx={{ textAlign: 'center', marginTop: '50px' }}>
                    <Typography color="textDisabled" variant="caption">&copy; 2024 MUI Shop. All rights reserved</Typography>
                </Box>
            </Container>
        </Box>
    )
};

export default Footer;