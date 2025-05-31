import React from "react";
import { useRef, useState } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
<<<<<<< HEAD
      //update the image state
      setImage(file);

      //generate preview URL from the file
      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);
=======
      if (!file.type.startsWith("image/")) {
        alert("Please select an image file.");
        return;
      }
      if (file.size > 2 * 1024 * 1024) { // 2MB limit
        alert("Image size should be less than 2MB.");
        return;
      }
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
>>>>>>> 1c7265a (final product)
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const onChooseFile = () => {
<<<<<<< HEAD
    inputRef.current.click();
  };

  return (
    <div className="flex justify-center mb-6 ">
=======
    console.log('Upload button clicked', inputRef.current);
    if (inputRef.current) inputRef.current.click();
  };

  return (
    <div className="flex flex-col items-center relative z-10">
>>>>>>> 1c7265a (final product)
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
      />

      {!image ? (
<<<<<<< HEAD
        <div className="w-20 h-20 flex items-center justify-center bg-purple-100 rounded-full relative ">
          <LuUser className="text-4xl text-primary" />

          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center bg-primary text-white rounded-full absolute -bottom-1 -right-1"
            onClick={onChooseFile}
          >
            <LuUpload />
=======
        <div className="w-14 h-14 flex items-center justify-center bg-purple-100 rounded-full relative ">
          <LuUser className="text-2xl text-black" />

          <button
            type="button"
            className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full absolute -bottom-1 -right-1 z-50 pointer-events-auto"
            onClick={onChooseFile}
          >
            <LuUpload size={16} />
>>>>>>> 1c7265a (final product)
          </button>
        </div>
      ) : (
        <div className="relative">
          <img
            src={previewUrl}
            alt="Profile"
<<<<<<< HEAD
            className="w-20 h-20  rounded-full object-cover"
          />
          <button
            type="button"
            className="w-8 h-8 flex items-center justify-center  bg-red-500 text-white rounded-full absolute -bottom-1 -right-1 "
            onClick={handleRemoveImage}
          >
            <LuTrash />
=======
            className="w-14 h-14  rounded-full object-cover"
          />
          <button
            type="button"
            className="w-6 h-6 flex items-center justify-center  bg-red-500 text-white rounded-full absolute -bottom-1 -right-1 "
            onClick={handleRemoveImage}
          >
            <LuTrash size={16} />
>>>>>>> 1c7265a (final product)
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
