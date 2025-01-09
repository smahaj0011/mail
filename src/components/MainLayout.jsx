import * as React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { createTheme } from "@mui/material/styles";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import { useDemoRouter } from "@toolpad/core/internal";
import { Typography } from "@mui/material";
import InboxPage from "../pages/Inbox";
import Starred from "../pages/Starred";
import { Inbox } from "@mui/icons-material";

const PAGES = {
  inbox: () => <InboxPage />,
  starred: () => <Starred />,
  // spam: <Spam />,
  // trash: <Trash />,
};

const demoTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: "data-toolpad-color-scheme",
  },
  colorSchemes: { light: true, dark: true },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 600,
      lg: 1200,
      xl: 1536,
    },
  },
});

const MainLayout = ({
  children,
  navigation = [
    {
      segment: "inbox",
      title: "Inbox",
      icon: <Inbox />,
    },
    {
      segment: "starred",
      title: "Starred",
      icon: <ShoppingCartIcon />,
    },
  ],
}) => {
  const router = useDemoRouter("/inbox");
  const ActivePage = PAGES[router.pathname.replace("/", "")] || (() => (
    <Typography variant="h4">Page Not Found</Typography>
  ));



  return (
    <AppProvider
      navigation={navigation}
      branding={{
        logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
        title: "VSMail",
        homeUrl: "/toolpad/core/introduction",
      }}
      router={router}
      theme={demoTheme}
    >
      <DashboardLayout pathname={router.pathname}>
          <ActivePage />
      </DashboardLayout>
    </AppProvider>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  navigation: PropTypes.array.isRequired,
};

export default MainLayout;
