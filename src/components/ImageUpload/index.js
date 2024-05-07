import React, { useState } from "react";

const ImageUpload = () => {
  const [image, setImage] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
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
