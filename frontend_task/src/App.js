import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import All_Task from './components/specific/AllTask';
import AllTask from './components/specific/AllTask';
import ImportantTask from './components/specific/ImportantTask';
import CompletedTask from './components/specific/CompletedTask';
import IncompleteTask from './components/specific/IncompleteTask';
import AppLayout from './Layout/AppLayout';
import Signup from './pages/Signup';
import LogIn from './pages/LogIn';


function App() {
  const router = createBrowserRouter([
   
      {
        path: '/signup',
        element: <Signup />
      },
      {
        path: '/login',
        element: <LogIn />
      },

      {
     
      element : <Home />,

      children : [
        {
          path : '/',
          element : <AllTask/>,
        },
        {
          path : '/tasks',
          element : <AllTask />
        },
        {
          path : '/important',
          element : <ImportantTask />
        },
        {
          path : '/completed',
          element : <CompletedTask />
        },
        {
          path: '/incomplete',
          element: <IncompleteTask />
        },
       
       
      ]}
  ])
  return (
    <div className="bg-gray-800 min-h-screen p-2 relative">
     {/* <Home /> */}
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
