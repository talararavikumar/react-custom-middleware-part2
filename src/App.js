import { Provider } from "react-redux";
import "./styles.css";
import store from "./store/store";
import PhotoContainer from "./pages/PhotoContainer.js";

export default function App() {
  return <PhotoContainer />;
}
