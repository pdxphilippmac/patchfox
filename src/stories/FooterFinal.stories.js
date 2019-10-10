// import React from "react";
// import ListItem from "../components/ListItem";
// import { action } from "@storybook/addon-actions";
// import List from "../components/List";

// export default {
//   title: "Lists"
// };

// export const Main = () => <ListItem onClick={action("clicked")}>CSS</ListItem>;
// export const MainActive = () => (
//   <ListItem active onClick={action("clicked")}>
//     CSS
//   </ListItem>
// );

// export const FooterFinal = () => {
//   const [activeItem, setActiveItem] = React.useState("css");
//   return (
//     <List>
//       <ListItem
//         active={activeItem === "css"}
//         onClick={() => setActiveItem("css")}
//         details={
//           <List indent>
//             <ListItem>Animations</ListItem>
//             <ListItem>Positions</ListItem>
//             <ListItem>Inline</ListItem>
//           </List>
//         }
//       >
//         CSS
//       </ListItem>
//       <ListItem
//         active={activeItem === "js"}
//         onClick={() => setActiveItem("js")}
//       >
//         JavaScript
//       </ListItem>
//       <ListItem
//         active={activeItem === "react"}
//         onClick={() => setActiveItem("react")}
//       >
//         React
//       </ListItem>
//       <ListItem
//         active={activeItem === "html"}
//         onClick={() => setActiveItem("html")}
//       >
//         HTML
//       </ListItem>
//     </List>
//   );
// };
