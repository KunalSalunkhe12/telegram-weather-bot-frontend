import AdminForm from "@/components/shared/AdminForm";
import Users from "@/components/shared/Users";

const Admin = () => {
  return (
    <div className="py-20 px-4">
      <h1 className="text-xl text-center font-semibold my-4">Admin Panel</h1>
      <AdminForm />
      <Users />
    </div>
  );
};

export default Admin;
