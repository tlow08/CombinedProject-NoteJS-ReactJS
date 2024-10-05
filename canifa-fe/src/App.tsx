import { Route, Routes } from "react-router-dom";
import "./App.css";
import Notfound from "./pages/Notfound";
import Dashboard from "./pages/admin/Dashboard";
import Home from "./pages/Home";
import AuthForm from "./components/AuthForm";
import LayoutClient from "./components/LayoutClient";
import LayoutAdmin from "./components/LayoutAdmin"; // Ensure this import is present
import CategoryList from "./components/CategoryList";
import CategoryForm from "./components/CategoryForm";
import ProductForm from "./components/ProductForm";
import News from "./pages/News";
import Promotion from "./pages/Promotion";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Detail from "./pages/Detail";
import ShoppingCart from "./pages/ShoppingCart";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutClient />}>
          <Route index element={<Home />} />
          <Route path="/login" element={<AuthForm isLogin />} />
          <Route path="/register" element={<AuthForm />} />
          <Route path="/news" element={<News />} />
          <Route path="/promotion" element={<Promotion />} />
          <Route path="/contact" element={<Contact />}/>
          <Route path="/product" element={<Products />}/>
          <Route path="/detail" element={<Detail />}/>
          <Route path="/shopping-cart" element={<ShoppingCart/>} />
        </Route>

        <Route path="/admin" element={<LayoutAdmin />}>
          <Route index element={<Dashboard />} />

          <Route path="/admin/products" element={<ProductList />}/>
          <Route path="/admin/product-add" element={<ProductForm />} />
          <Route path="/admin/product-edit/:id" element={<ProductForm />} />

          <Route path="/admin/categories" element={<CategoryList />} />
          <Route path="/admin/category-add" element={<CategoryForm />} />
          <Route path="/admin/category-edit/:id" element={<CategoryForm />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
