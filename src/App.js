import { useState } from "react";
import { MenuPage } from "./pages/MenuPage";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AdminPage } from "./pages/adminPage";
import { HomePage } from "./pages/homePage";

function App() {
  const [menuItems1, setMenuItems1] = useState([]);
  const [menuItems2, setMenuItems2] = useState([]);
  const [menuItems3, setMenuItems3] = useState([]);
  const [menuItems4, setMenuItems4] = useState([]);
  const [menuItems5, setMenuItems5] = useState([]);
  const [menuItems6, setMenuItems6] = useState([]);
  const [menuItems7, setMenuItems7] = useState([]);
  const [menuItems8, setMenuItems8] = useState([]);
  const [menuItems9, setMenuItems9] = useState([]);
  const [menuItemsHome, setMenuItemsHome] = useState([]);

  return (
    <div className="app">
      <Router>
        <Route path="/table1">
          <MenuPage
            table={1}
            menuItems={menuItems1}
            setMenuItems={setMenuItems1}
          />
        </Route>
        <Route path="/table2">
          <MenuPage
            table={2}
            menuItems={menuItems2}
            setMenuItems={setMenuItems2}
          />
        </Route>
        <Route path="/table3">
          <MenuPage
            table={3}
            menuItems={menuItems3}
            setMenuItems={setMenuItems3}
          />
        </Route>
        <Route path="/table4">
          <MenuPage
            table={4}
            menuItems={menuItems4}
            setMenuItems={setMenuItems4}
          />
        </Route>
        <Route path="/table5">
          <MenuPage
            table={5}
            menuItems={menuItems5}
            setMenuItems={setMenuItems5}
          />
        </Route>
        <Route path="/table6">
          <MenuPage
            table={6}
            menuItems={menuItems6}
            setMenuItems={setMenuItems6}
          />
        </Route>
        <Route path="/table7">
          <MenuPage
            table={7}
            menuItems={menuItems7}
            setMenuItems={setMenuItems7}
          />
        </Route>
        <Route path="/table8">
          <MenuPage
            table={8}
            menuItems={menuItems8}
            setMenuItems={setMenuItems8}
          />
        </Route>
        <Route path="/table9">
          <MenuPage
            table={9}
            menuItems={menuItems9}
            setMenuItems={setMenuItems9}
          />
        </Route>

        <Route path="/admin">
          <AdminPage />
        </Route>
        <Route exact path="/">
          <HomePage menuItems={menuItemsHome} setMenuItems={setMenuItemsHome} />
        </Route>
      </Router>
    </div>
  );
}

export default App;
