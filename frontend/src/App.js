import { Route, Routes } from "react-router"
import ProductList from "./comps/ProductList"
import AddProduct from "./comps/AddProduct";
import EditProduct from "./comps/EditProduct";

function App() {
  return (
      <div className="container">
      <div className="columns">
        <div className="column is-half is-offset-one-quarter">
          <Routes>
            <Route path="/" element={ <ProductList /> }/>
            <Route path="add" element={ <AddProduct /> } />
            <Route path="edit/:id" element={ <EditProduct /> } />
          </Routes>
        </div>
      </div>
    </div>
  )
}

export default App;
