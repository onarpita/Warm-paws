import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router";

const UpdateProfile = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [displayName, setDisplayName] = useState(user?.displayName || "");
  const [photoURL, setPhotoURL] = useState(user?.photoURL || "");
  const [updating, setUpdating] = useState(false);

  const handleUpdateProfile = async (e) => {
    e.preventDefault();
    setUpdating(true);

    try {
      await updateProfile(user, { displayName, photoURL });

      Swal.fire({
        icon: "success",
        title: "Profile Updated!",
        text: "Your profile information has been updated.",
        confirmButtonColor: "#8D6E63",
      });

      navigate("/profile"); // ← Redirect after update
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text: error.message,
        confirmButtonColor: "#8D6E63",
      });
    }

    setUpdating(false);
  };

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex justify-center items-center py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[90%] max-w-md text-center border border-[#8D6E63]/20">
        <img
          src={photoURL || "https://via.placeholder.com/150"}
          alt="User Avatar"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[#8D6E63]"
        />

        <h2 className="text-2xl font-bold text-[#8D6E63] mb-3">
          Update Profile
        </h2>

        <form onSubmit={handleUpdateProfile} className="space-y-4">
          <input
            type="text"
            value={displayName}
            onChange={(e) => setDisplayName(e.target.value)}
            placeholder="Enter new name"
            className="input input-bordered w-full"
          />

          <input
            type="text"
            value={photoURL}
            onChange={(e) => setPhotoURL(e.target.value)}
            placeholder="Enter new photo URL"
            className="input input-bordered w-full"
          />

          <button
            type="submit"
            disabled={updating}
            className="btn w-full bg-[#8D6E63] hover:bg-[#6D4C41] text-white font-semibold"
          >
            {updating ? "Updating..." : "Save Changes"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfile;