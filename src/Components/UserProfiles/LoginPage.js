import { auth } from "../../firebaseHelper/firebaseConfigForServer";
import { useContext, useState } from "react";
import LoginWithGoogle from "./LoginWithGoogle";
import CheckCurrentUser from "./CheckCurrentUser";
import { AuthContext } from "../Auth/Auth";
import Lottie from "lottie-react";
import LoginImg from "../../Assests/login-sub-left.json"
import { Box, Grid, Paper } from "@mui/material";

export function LoginPage() {
    const { setCurrentUser } = useContext(AuthContext);
    const [checkCurrent, setCheckCurrent] = useState(true);
    const LOGO_SRC = "https://www.acrytechsolutions.in/images/logo.webp";
    const LOGO_ALT = "Acrytech Logo";

    const onAuthSuccess = async () => {
        setCurrentUser(auth.currentUser);
    }

    if (checkCurrent) {
        // check if current user is present.
        return (
            <CheckCurrentUser
                onAuthSuccess={onAuthSuccess}
                showLogin={() => setCheckCurrent(false)}
            />
        )
    }

    return (
        <Box
            sx={{
                margin: 0,
                width: "100%",
                height: '100%',
                display: 'flex',
                justifyContent: { xs: 'center', sm: 'center', md: 'space-between' },
                alignItems: 'center',
                background: 'radial-gradient(circle, rgba(34,193,195,1) 0%, rgba(45,108,253,1) 100%)',
            }}
        >
            <Box
                sx={{
                    display: { xs: 'none', sm: 'none', md: 'flex' },
                    width: { xs: '0', sm: '0', md: '50%' },
                    height: '100%',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}
            >
                <Box
                    sx={{
                        backgroundColor: '#fff',
                        padding: '1rem',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100%',
                        width: '100%'
                    }}
                >
                    <img
                        src={LOGO_SRC}
                        alt={LOGO_ALT}
                        style={{ marginBottom: '1rem' }}
                    />
                    <Lottie animationData={LoginImg} loop={true} style={{ height: "75%", width: "100%" }} />
                </Box>
            </Box>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: { xs: 'center', sm: 'center', md: 'center' },
                    alignItems: 'center',
                    width: { xs: '80%', sm: '50%' },
                    height: '100%',
                }}
            >
                <Paper
                    sx={{
                        padding: '0.5rem',
                        backgroundColor: '#fff',
                        borderRadius: '8px',
                        boxShadow: '0px 3px 6px rgba(0,0,0,0.16)',
                        width: '100%',
                        maxWidth: { xs: '100%', sm: '100%', md: '75%', lg: '50%' }
                    }}
                >
                    <Grid
                        item
                        xs={12}
                        sx={{ display: { xs: 'block', sm: 'block', md: 'none' } }}
                    >
                        <img
                            className="FirmImageSmScr"
                            src={LOGO_SRC}
                            alt={LOGO_ALT}
                            style={{
                                marginBottom: '1rem',
                                marginLeft: 'auto',
                                marginRight: 'auto',
                                display: 'block',
                            }}
                        />
                    </Grid>
                    <LoginWithGoogle onAuthSuccess={onAuthSuccess} />
                </Paper>
            </Box>
        </Box>
    );
}