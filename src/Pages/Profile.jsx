import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Link } from "react-router";

const Profile = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  console.log(user.photoURL);

  return (
    <div className="min-h-screen bg-[#F8F8F8] flex justify-center items-center py-10">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-[90%] max-w-md text-center border border-[#8D6E63]/20">
        <img
          src={user?.photoURL || "https://via.placeholder.com/150"}
          alt="User Avatar"
          className="w-32 h-32 rounded-full mx-auto mb-4 border-4 border-[#8D6E63]"
        />

        <h2 className="text-2xl font-bold text-[#8D6E63]">
          {user?.displayName || "Anonymous User"}
        </h2>

        <p className="text-gray-600 mb-6">{user?.email}</p>

        <Link
          to="/update-profile"
          className="btn w-full bg-[#8D6E63] hover:bg-[#6D4C41] text-white font-semibold"
        >
          Update Profile
        </Link>
      </div>
    </div>
  );
};

export default Profile;