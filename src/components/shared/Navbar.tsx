import { GoogleLogin, googleLogout } from "@react-oauth/google";
import useAuthStore from "@/lib/zustand";
import { handleGoogleLogin } from "@/lib/utils";
import { Button } from "../ui/button";

const Navbar = () => {
  const { userProfile, addUser, removeUser } = useAuthStore((state) => state);
  return (
    <nav className="fixed flex justify-between items-center w-full top-0 left-0 p-4 bg-black text-white">
      <p>Telegram Bot Admin</p>
      {userProfile ? (
        <Button
          onClick={() => {
            googleLogout();
            removeUser();
          }}
        >
          Logout
        </Button>
      ) : (
        <GoogleLogin
          onSuccess={(res) =>
            res.credential && handleGoogleLogin(res.credential, addUser)
          }
          size="medium"
        />
      )}
    </nav>
  );
};

export default Navbar;
