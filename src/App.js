import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Header } from "./component/Header";
import { Home } from "./component/Home";
import { Footer } from "./component/Footer";
import { UserList } from "./component/UserList";
import { AddUser } from "./component/AddUser";
import { EditUser } from "./component/EditUser";
import { AddProduct } from './component/AddProduct';
import { ProductList } from './component/ProductList';

function App() {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/userlist" element={<UserList />} />
                <Route path="/adduser" element={<AddUser />} />
                <Route path="/edituser/:id" element={<EditUser />} />
                <Route path="/addproduct/" element= { <AddProduct/> } />
                <Route path="/productlist/" element= { <ProductList/> } />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
