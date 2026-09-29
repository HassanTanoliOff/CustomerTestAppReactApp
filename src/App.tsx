import ListItems, { Greet } from "./components/lists";
import FirstComponent from "./components/FirstComponent";
import Navbar from "./components/Navbar";
import LoginForm from "./components/LoginForm";

export default function App() {
  const name: string = "Hassan";
  const role: string = "Intern";
  return (
    <>
      {/* <ListItems></ListItems> */}
      <Navbar />
      <br></br>
      <LoginForm/>
    </>
  );
}
