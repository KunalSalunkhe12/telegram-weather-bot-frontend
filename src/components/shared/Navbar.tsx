import { GoogleLogin, googleLogout } from "@react-oauth/google";
import useAuthStore from "@/lib/zustand";
import { handleGoogleLogin } from "@/lib/utils";
import { Button } from "../ui/button";

const Navbar = () => {
  const { addAdmin, admin, removeAdmin } = useAuthStore((state) => state);
  return (
    <nav className="fixed flex justify-between items-center w-full top-0 left-0 p-4 bg-black text-white">
      <p>Telegram Bot Admin</p>
      {admin ? (
        <Button
          onClick={() => {
            googleLogout();
            removeAdmin();
          }}
        >
          Logout
        </Button>
      ) : (
        <GoogleLogin
          onSuccess={(res) =>
            res.credential && handleGoogleLogin(res.credential, addAdmin)
          }
          size="medium"
        />
      )}
    </nav>
  );
};

export default Navbar;
