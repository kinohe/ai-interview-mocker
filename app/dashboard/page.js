import Header from "../header/page";

function Dashboard() {
  return (
    <div>
      <Header />
      <div className="ml-28 mt-10">
        <h1 className="text-blue-600  font-bold text-3xl mt-2 ">Dashboard</h1>
        <p className="text-gray-500">
          Create and Start your AI Mockup Interview
        </p>
      </div>
      <div className=" mt-10 ml-28 mr-96 p-14 bg-gray-300  rounded-sm	transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105  duration-300">
        <p className="  text-black">+Add New</p>
      </div>
    </div>
  );
}

export default Dashboard;
