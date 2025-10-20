import RootLayout from "./Layouts/RootLayout";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="" element={<h1>Home Page</h1>}></Route>
        <Route path="projects" element={<h1>Projects Page</h1>}></Route>
        <Route path="*" element={<h1>404 Page</h1>}></Route>
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
