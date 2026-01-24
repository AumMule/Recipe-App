import { useState, useEffect } from "react";
import { toast } from "react-toastify";

const Profile = () => {
  const [profile, setProfile] = useState({
    username: "",
    chiefName: ""
  });

  useEffect(() => {
    // Load profile from localStorage
    const savedProfile = localStorage.getItem("userProfile");
    if (savedProfile) {
      try {
        setProfile(JSON.parse(savedProfile));
      } catch (e) {
        console.error("Invalid profile data in localStorage");
      }
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSave = () => {
    localStorage.setItem("userProfile", JSON.stringify(profile));
    toast.success("Profile saved successfully!");
  };

  return (
    <div className="min-h-screen py-6 px-4">
      <div className="max-w-md mx-auto">
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Profile Settings
          </h1>

          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <input
                type="text"
                name="username"
                value={profile.username}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500"
                placeholder="Enter your username"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Chief Name
              </label>
              <input
                type="text"
                name="chiefName"
                value={profile.chiefName}
                onChange={handleInputChange}
                className="w-full px-4 py-3 bg-gray-50 border-0 rounded-lg focus:bg-white focus:ring-2 focus:ring-blue-500 transition-all placeholder-gray-500"
                placeholder="Enter your chief name"
              />
            </div>

            <button
              onClick={handleSave}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 shadow-sm"
            >
              Save Profile
            </button>
          </div>

          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <h3 className="text-sm font-medium text-gray-700 mb-2">Permissions:</h3>
            <p className="text-sm text-gray-600">
              Only users with username and chief name as "name" can update recipes.
            </p>
            {profile.username === "name" && profile.chiefName === "name" ? (
              <p className="text-sm text-green-600 mt-2">✓ You have permission to update recipes</p>
            ) : (
              <p className="text-sm text-red-600 mt-2">✗ You do not have permission to update recipes</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;