import * as React from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link";

const Instas = () => {
  const firstInstaList = [
    { name: "acheseupetrs", link: "https://www.instagram.com/acheseupetrs/" },
    {
      name: "pontalanimais",
      link: "https://www.instagram.com/pontalanimais/",
    },
    {
      name: "resgatadosdasilhas",
      link: "https://www.instagram.com/resgatadosdasilhas/",
    },
    {
      name: "adote01miau",
      link: "https://www.instagram.com/adote01miau/",
    },
    {
      name: "animaisresgatadossarandi",
      link: "https://www.instagram.com/animaisresgatadossarandi/",
    },
    {
      name: "animaisdaenchente_nh",
      link: "https://www.instagram.com/animaisdaenchente_nh/",
    },
  ];

  const lastInstaList = [
    {
      name: "resgatados.enchente.rs",
      link: "https://www.instagram.com/resgatados.enchente.rs/",
    },
    {
      name: "resgatados_ipa",
      link: "https://www.instagram.com/resgatados_ipa/",
    },
    {
      name: "sosanimaisdailha",
      link: "https://www.instagram.com/sosanimaisdailha/",
    },
    {
      name: "animaisresgatadosmathias",
      link: "https://www.instagram.com/animaisresgatadosmathias/",
    },
    {
      name: "acheseudogulbra",
      link: "https://www.instagram.com/acheseudogulbra/",
    },
    {
      name: "Mais Perfis Aqui",
      link: "https://pivitelo.notion.site/PETS-RESGATADOS-DA-ENCHETE-1a25ccd197f04f5fa8e051f0a6dbb162",
    },
  ];

  return (
    <div className="instas-container">
      <h1 className="home-title">Não achou seu pet aqui?</h1>
      <h1 className="space-top subtitle">
        Confira também os perfis que estão compartilhando fotos e informações
        dos animais resgatados:
      </h1>
      <div className="insta-lists space-top">
        <Box sx={{ width: "100%", maxWidth: 360 }}>
          <nav aria-label="main mailbox folders">
            <List>
              {firstInstaList.map((item) => (
                <Link href={item.link} target="_blank">
                  <ListItem disablePadding style={{ color: "white" }}>
                    <ListItemButton>
                      <ListItemIcon style={{ color: "white" }}>@</ListItemIcon>
                      <ListItemText primary={item.name} />
                    </ListItemButton>
                  </ListItem>
                </Link>
              ))}
            </List>
          </nav>
        </Box>
        <Box sx={{ width: "100%", maxWidth: 360 }}>
          <nav aria-label="main mailbox folders">
            <List>
              {lastInstaList.map((item) => (
                <Link href={item.link} target="_blank">
                  <ListItem style={{ color: "white" }} disablePadding>
                    <ListItemButton>
                      <ListItemIcon style={{ color: "white" }}>@</ListItemIcon>
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
