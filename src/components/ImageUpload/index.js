import React, { useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useDispatch } from "react-redux";
import { changeFoto } from "@/store/reducers/formReducer";

const ImageUpload = () => {
  const dispatch = useDispatch();
  const [image, setImage] = useState(null);
  console.log(image);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      dispatch(changeFoto(file));
      const reader = new FileReader();
      reader.onload = () => {
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
