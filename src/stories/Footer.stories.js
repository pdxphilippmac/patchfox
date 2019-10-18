import React from "react";
import Plus from "../icons/footerPlus";
import Home from "../icons/footerHome";
import List from "../icons/footerList";
import Fetch from "../icons/footerFetch";

import PlusActive from "../icons/footerPlusActive";
import HomeActive from "../icons/footerHomeActive";
import ListActive from "../icons/footerlistActive";
export default {
  title: "FooterComponents"
};

export const PlusIcon = () => <Plus />;
export const PlusIconActive = () => <PlusActive />;

export const HomeIcon = () => <Home />;
export const HomeIconActive = () => <HomeActive />;

export const ListIcon = () => <List />;
export const ListIconActive = () => <ListActive />;

export const FetchIcon = () => <Fetch />;
