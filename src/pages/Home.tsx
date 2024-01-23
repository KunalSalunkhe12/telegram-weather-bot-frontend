import useAuthStore from "@/lib/zustand";
import Admin from "./Admin";

const Home = () => {
  const { admin } = useAuthStore((state) => state);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="text-center">
        {admin ? (
          <Admin />
        ) : (
          <h1 className="my-4 text-xl font-bold">Login to Admin Panel</h1>
        )}
      </div>
    </div>
  );
};

export default Home;
