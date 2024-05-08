import { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { FoundButton } from "./petCard.styles";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function PetCard({
  especie,
  sexo,
  raca,
  cidade,
  comportamento,
  faixaEtaria,
  foto,
  responsavel,
  telefone,
  cor,
  endereco,
  observacao,
  porte,
  saude,
}) {
  const [expanded, setExpanded] = useState(false);
  const [image, setImage] = useState();

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const hasPorte = porte ? `de porte ${porte}, ` : "";
  const hasRaca = raca ? `da raça ${raca}, ` : "";

  return (
    <Card sx={{ maxWidth: 345 }} className="card-container">
      <CardHeader
        title={especie}
        subheader={cidade}
        action={
          <div className="found-button-container">
            <label className="label-found-button">Família encontrada?</label>
            <FoundButton aria-label="settings">Informar</FoundButton>
          </div>
        }
      />
      {foto && (
        <CardMedia
          component="img"
          height="194"
          image={foto}
          alt="Paella dish"
        />
      )}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Olá, sou um <span className="card-info">{especie}</span>,{" "}
          <span className="card-info">{sexo}</span>,{" "}
          <span className="card-info">{hasPorte}</span>
          <span className="card-info">{hasRaca}</span> da cor{" "}
          <span className="card-info">{cor}</span> e quem me resgatou acredita
          que eu seja {faixaEtaria}. Eu fui encontrado na cidade{" "}
          <span className="card-info">{cidade}</span> e atualmente eu estou
          aqui: <span className="card-info">{endereco}</span>. O nome de quem
          está responsável por mim é{" "}
          <span className="card-info">{responsavel}</span> e você pode entrar em
          contato por este telefone{" "}
          <span className="card-info">{telefone}</span>! Por favor vem me
          buscar!
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Comportamento: <span>{comportamento}</span>
          </Typography>
          <Typography paragraph>
            Informações de saúde: <span>{saude}</span>
          </Typography>
          <Typography paragraph>
            Observações: <span>{observacao}</span>
          </Typography>
          <Typography paragraph>
            Responsável: <span>{responsavel}</span>
          </Typography>
          <Typography paragraph>
            Contato: <span>{telefone}</span>
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}
