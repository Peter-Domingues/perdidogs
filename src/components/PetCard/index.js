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
  const [expandedImage, setExpandedImage] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleExpandImageClick = () => {
    setExpandedImage(!expandedImage);
  };
  const handleInformarClick = () => {
    const mailtoLink = `mailto:perdidogseresgatos@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
  };

  const hasPorte = porte ? `de porte ${porte}, ` : "";
  const hasRaca = raca ? `da raça ${raca}, ` : "";
  const hasFaixaEtaria = faixaEtaria
    ? ` e quem me resgatou acredita
  que eu seja ${faixaEtaria}, `
    : "";

  const subject = `Informe de ${especie} encontrado`;
  const body = `Oi, minha família me encontrou!\n\nFoto: ${foto}\nSexo: ${sexo}\nCidade: ${cidade}`;

  return (
    <Card sx={{ maxWidth: 345 }} className="card-container">
      <CardHeader
        title={especie}
        subheader={cidade}
        action={
          <div className="found-button-container">
            <label className="label-found-button">Família encontrada?</label>
            <FoundButton aria-label="settings" onClick={handleInformarClick}>
              Informar
            </FoundButton>
          </div>
        }
      />
      {foto && (
        <CardMedia
          component="img"
          sx={{ height: expandedImage ? "auto" : 200, cursor: "pointer" }}
          image={foto}
          alt="Imagem de um animal resgatado"
          onClick={handleExpandImageClick}
        />
      )}
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          Olá, sou um <span className="card-info">{especie}</span>,{" "}
          <span className="card-info">{sexo}</span>,{" "}
          <span className="card-info">{hasPorte}</span>
          <span className="card-info">{hasRaca}</span> da cor{" "}
          <span className="card-info">{cor}</span> {hasFaixaEtaria}. Eu fui
          encontrado na cidade <span className="card-info">{cidade}</span> e
          atualmente eu estou aqui:{" "}
          <span className="card-info">{endereco}</span>. O nome de quem está
          responsável por mim é <span className="card-info">{responsavel}</span>{" "}
          e você pode entrar em contato por este telefone{" "}
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
