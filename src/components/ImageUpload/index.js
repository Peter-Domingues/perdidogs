import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useDispatch, useSelector } from "react-redux";
import { changeFoto } from "@/store/reducers/formReducer";

const ImageUpload = () => {
  const dispatch = useDispatch();
  const foto = useSelector((state) => state.form.foto);
  const [image, setImage] = useState(foto);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        dispatch(changeFoto(reader.result));
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <div>
        <label className="image-upload" htmlFor="fileInput">
          <CloudUploadIcon className="image-upload-icon" />
          Selecione uma foto
        </label>
        <input
          type="file"
          id="fileInput"
          accept="image/*"
          onChange={handleImageChange}
          style={{ display: "none" }}
        />
      </div>

      {image && (
        <img
          src={image}
          alt="Preview"
          style={{ maxWidth: "300px", marginTop: "10px" }}
        />
      )}
    </div>
  );
};

export default ImageUpload;
