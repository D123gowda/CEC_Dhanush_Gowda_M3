// import Header from "./components/Header";
// import Footer from "./components/Footer";
import { Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from "react-router-dom";

import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";


const router = createBrowserRouter
(createRoutesFromElements(
  <Route path='/'>
    <Route index element = {<HomePage />} />
    <Route path = '/about' element = {<AboutPages />} />
  </Route>
))
const App = () => {
  return (
    // <>
    // <div>
    //   {/* <Header/>{" "} */}
    //   {/* <h1>Hello World!</h1> */}
    //   {/* <Footer name = {"Good day"}/> {" "} */}
    // </div>
    // </>
    <RouterProvider router={router} />
  )
};
export default App;