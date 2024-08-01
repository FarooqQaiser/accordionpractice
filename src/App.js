import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accordion from "./Accordion";

function App() {
  const items = [
    {
      title: "Question 1",
      content:
        "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua obcaecati ipsa assumenda doloremque ipsam eos cupiditate libero fuga provident nemo architecto deserunt magnam praesentium natus impedit tenetur dolor pariatur suscipit ab sunt aspernatur vel ipsum necessitatibus voluptatum mollitia odio eligendi",
    },
    {
      title: "Question 2",
      content:
        "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua obcaecati ipsa assumenda doloremque ipsam eos cupiditate libero fuga provident nemo architecto deserunt magnam praesentium natus impedit tenetur dolor pariatur suscipit ab sunt aspernatur vel ipsum necessitatibus voluptatum mollitia odio eligendi",
    },
    {
      title: "Question 3",
      content:
        "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua obcaecati ipsa assumenda doloremque ipsam eos cupiditate libero fuga provident nemo architecto deserunt magnam praesentium natus impedit tenetur dolor pariatur suscipit ab sunt aspernatur vel ipsum necessitatibus voluptatum mollitia odio eligendi",
    },
    {
      title: "Question 4",
      content:
        "lorem ipsum dolor sit amet consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua obcaecati ipsa assumenda doloremque ipsam eos cupiditate libero fuga provident nemo architecto deserunt magnam praesentium natus impedit tenetur dolor pariatur suscipit ab sunt aspernatur vel ipsum necessitatibus voluptatum mollitia odio eligendi",
    },
  ];

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Accordion items={items} />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
