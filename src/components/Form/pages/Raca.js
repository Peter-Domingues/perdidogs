"use client";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { useDispatch } from "react-redux";
import { changeRaca } from "@/store/reducers/formReducer";
import { increment } from "@/store/reducers/pageReducer";

const Raca = () => {
  const dispatch = useDispatch();

  const onChangeRaca = (e, raca) => {
    dispatch(changeRaca(raca));
    dispatch(increment());
  };

  const racas = [
    "SRD",
    "Labrador Retriever",
    "Pastor Alemão",
    "Golden Retriever",
    "Bulldog Francês",
    "Bulldog Inglês",
    "Beagle",
    "Poodle (Toy, Miniatura, Padrão)",
    "Boxer",
    "Dachshund (Teckel, Salsicha)",
    "Yorkshire Terrier",
    "Chihuahua",
    "Husky Siberiano",
    "Rottweiler",
    "Shih Tzu",
    "Pug",
    "Doberman Pinscher",
    "Border Collie",
    "Australian Shepherd",
    "Cocker Spaniel",
    "Maltese",
    "Dálmata",
    "Bichon Frisé",
    "Jack Russell Terrier",
    "Bull Terrier",
    "Basset Hound",
    "Schnauzer (Miniatura, Standard, Gigante)",
    "Pomerânia",
    "Dogue Alemão",
    "Bernese Mountain Dog",
    "Mastiff",
    "São Bernardo",
    "Akita Inu",
    "Cavalier King Charles Spaniel",
    "West Highland White Terrier",
    "Shar-Pei",
    "Staffordshire Bull Terrier",
    "Rhodesian Ridgeback",
    "Great Dane",
    "Scottish Terrier",
    "Lhasa Apso",
    "Shetland Sheepdog",
    "Papillon",
    "Collie (Rough e Smooth)",
    "Setter Irlandês",
    "Weimaraner",
    "Whippet",
    "Alaskan Malamute",
    "Chow Chow",
    "Havanese",
    "Border Terrier",
  ];

  return (
    <div>
      <h1>Qual a raça?</h1>
      <Autocomplete
        disablePortal
        id="combo-box-demo"
        options={racas}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Raça" />}
        onChange={onChangeRaca}
      />
    </div>
  );
};

export default Raca;
