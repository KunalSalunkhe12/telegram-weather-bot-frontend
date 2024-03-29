import useAuthStore from "@/lib/zustand";
import Admin from "./Admin";

const Home = () => {
  const { admin } = useAuthStore((state) => state);
  return (
    <div>
      {admin ? (
        <div>
          <Admin />
        </div>
      ) : (
        <div className="min-h-screen flex justify-center items-center">
          <h1 className="my-4 text-xl font-bold">Login to Admin Panel</h1>
        </div>
      )}
    </div>
  );
};

export default Home;
