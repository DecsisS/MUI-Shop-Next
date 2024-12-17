'use client'

import Header from "./(header)/Header";
import Footer from "./(footer)/Footer";
import { Container, createTheme, ThemeProvider } from "@mui/material";
import { CartContext, cartReducer, initialState } from "@/data/context";
import { ReactNode, useReducer } from "react";
import Notification from "@/components/notification/Notification";
import { Colors } from "@/utils/styleConstants";

const theme = createTheme({
  palette: {
    primary: {
      main: Colors.primary
    },
    secondary: {
      main: Colors.secondary
    }
  }
})

const AppContainer = (props: {children: ReactNode}) => {
    const [state, dispatch] = useReducer(cartReducer, initialState);

    return (
      <ThemeProvider theme={theme}>
        <CartContext.Provider value={{ state, dispatch }}>
          <Header />
          <Container
            className="contentContainer"
          >
            {props.children}
          </Container>
          <Footer />
          <Notification />
        </CartContext.Provider>
      </ThemeProvider>
    )
}

export default AppContainer;