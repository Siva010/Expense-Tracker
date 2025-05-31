import React, { useRef, useState, useEffect } from "react";
import { LuUser, LuUpload, LuTrash } from "react-icons/lu";

const ProfilePhotoSelector = ({ image, setImage }) => {
  const inputRef = useRef(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  useEffect(() => {
    if (typeof image === "string") {
      setPreviewUrl(image);
    } else if (!image) {
      setPreviewUrl(null);
    }
  }, [image]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
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
    }
  };

  const handleRemoveImage = () => {
    setImage(null);
    setPreviewUrl(null);
  };

  const onChooseFile = () => {
    if (inputRef.current) inputRef.current.click();
  };

  return (
    <div className="flex flex-col items-center relative z-10">
      <input
        type="file"
        accept="image/*"
        ref={inputRef}
        onChange={handleImageChange}
        className="hidden"
        aria-label="Upload profile photo"
      />

      {!previewUrl ? (
        <div
          className="w-14 h-14 flex items-center justify-center bg-purple-100 rounded-full relative "
          tabIndex={0}
          aria-label="Profile avatar placeholder"
        >
          <LuUser className="text-2xl text-black" />

          <button
            type="button"
            className="w-6 h-6 flex items-center justify-center bg-primary text-white rounded-full absolute -bottom-1 -right-1 z-50 pointer-events-auto"
            onClick={onChooseFile}
            aria-label="Choose profile photo"
            tabIndex={0}
          >
            <LuUpload size={16} />
          </button>
        </div>
      ) : (
        <div className="relative">
          <img
            src={previewUrl}
            alt="Profile"
            className="w-14 h-14 rounded-full object-cover"
          />
          <button
            type="button"
            className="w-6 h-6 flex items-center justify-center bg-red-500 text-white rounded-full absolute -bottom-1 -right-1"
            onClick={handleRemoveImage}
            aria-label="Remove profile photo"
            tabIndex={0}
          >
            <LuTrash size={16} />
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfilePhotoSelector;
