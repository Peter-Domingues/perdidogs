import React, { useEffect, useState } from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useDispatch, useSelector } from "react-redux";
import { changeFoto, changeImageTemp } from "@/store/reducers/formReducer";

const ImageUpload = () => {
  const dispatch = useDispatch();
  const imageTemp = useSelector((state) => state.form.imageTemp);
  const [image, setImage] = useState(imageTemp);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        dispatch(changeFoto(file));
        dispatch(changeImageTemp(reader.result));

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
