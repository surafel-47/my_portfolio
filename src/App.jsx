import RootLayout from "./Layouts/RootLayout";
import Home from "./pages/Home";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ProjectsPage from "./pages/ProjectsPage";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="" element={<Home />}></Route>
        <Route path="projects" element={<ProjectsPage />}></Route>
        <Route path="*" element={<h1>404 Page</h1>}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
