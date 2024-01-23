import { setWeatherApiKey } from "@/api";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useAuthStore from "@/lib/zustand";
import { useState } from "react";

const Admin = () => {
  const [weatherKey, setWeatherKey] = useState("");
  const { admin } = useAuthStore((state) => state);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (weatherKey && admin) {
      const data = await setWeatherApiKey(weatherKey, admin.sub);
      console.log(data);
      setWeatherKey("");
    }
  };
  return (
    <div className="py-20 px-4">
      <h1 className="text-xl font-semibold my-4">Admin Panel</h1>
      <form className="w-full md:w-1/2 flex gap-2" onSubmit={handleSubmit}>
        <Input
          onChange={(e) => setWeatherKey(e.target.value)}
          value={weatherKey}
          name="weather-key"
          type="text"
          placeholder="Enter your new Weather api key"
        />
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};

export default Admin;
