import React from "react";
import Plus from "../icons/footerPlus";
import Home from "../icons/footerHome";
import List from "../icons/footerList";
import Footer from "../components/Footer";
export default {
  title: "FooterComponents"
};

export const Plus_Active = () => <Plus />;

export const Home_Inactive = () => <Home />;

export const List_Inactive = () => <List />;

export const FooterBar = () => <Footer />;
