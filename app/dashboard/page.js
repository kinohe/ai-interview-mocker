import Header from "../header/page";
import AddNewInterview from "./components/AddNewInterview";
function Dashboard() {
  return (
    <div className="p-10">
      <div>
        <h1 className="text-blue-600  font-bold text-3xl mt-2 ">Dashboard</h1>
        <p className="text-gray-500">
          Create and Start your AI Mockup Interview
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 my-5">
        <AddNewInterview />
      </div>
    </div>
  );
}

export default Dashboard;
