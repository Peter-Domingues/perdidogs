import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";

const Instas = () => {
  const instaList = [
    { name: "acheseupetrs", link: "https://www.instagram.com/acheseupetrs/" },
    {
      name: "dogs_enchenters",
      link: "https://www.instagram.com/dogs_enchenters/",
    },
    {
      name: "animaisresgatadosrs",
      link: "https://www.instagram.com/animaisresgatadosrs/",
    },
  ];

  return (
    <div className="instas-container">
      <h1 className="title">Não achou seu pet aqui?</h1>
      <h1 className="space-top subtitle">
        Confira também os perfis que estão compartilhando fotos e informações
        dos animais resgatados:
      </h1>
      <div className="insta-lists space-top">
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <nav aria-label="main mailbox folders">
            <List>
              {instaList.map((item) => (
                <Link href={item.link} target="_blank">
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>@</ListItemIcon>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </nav>
        </Box>
        <Box sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
          <nav aria-label="main mailbox folders">
            <List>
              {instaList.map((item) => (
                <Link href={item.link} target="_blank">
                  <ListItem disablePadding>
                    <ListItemButton>
                      <ListItemIcon>@</ListItemIcon>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </nav>
        </Box>
      </div>
    </div>
  );
};

export default Instas;
