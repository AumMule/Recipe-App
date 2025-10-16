import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";

const App = () => {
    return (
		<div className="py-[2%] px-[5%] w-full min-h-screen overflow-x-hidden font-bold text-[#1A3365] bg-[#ebfcff]">
            <Navbar />
            <Mainroutes />
        </div>
    );
};

export default App;
