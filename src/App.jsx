import "./App.css";
import ButtonClick from "./components/ButtonClick";
import Course from "./components/Course";
import MainContent from "./components/MainContent";
import Allcourses from "./components/AllCourses";

function App() {
  return (
    <div>
      <MainContent />
      <ButtonClick />
      {/* <Course course={{ title: "Amgular", description: "Demo Courses" }} /> */}
      <Allcourses />
    </div>
  );
}

export default App;
