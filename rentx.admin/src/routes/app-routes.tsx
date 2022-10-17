import { Routes, Route } from "react-router-dom";
import { EditCar } from "../pages/cars/edit";
import { ListCars } from "../pages/cars/list";
import { NewCar } from "../pages/cars/new";
import { EditCategory } from "../pages/categories/edit";
import { ListCategories } from "../pages/categories/list";
import { NewCategory } from "../pages/categories/new";
import { EditCustomer } from "../pages/customers/edit";
import { ListCustomers } from "../pages/customers/list";
import { NewCustomer } from "../pages/customers/new";
import { Dashboard } from "../pages/dashboard";
import { ListRentals } from "../pages/rentals/list";
import { EditSpecification } from "../pages/specifications/edit";
import { ListSpecifications } from "../pages/specifications/list";
import { NewSpecification } from "../pages/specifications/new";
import { PrivateRoute } from "./private.route";

export function AppRoutes() {
  return (
    <Routes>
      <Route index element={<PrivateRoute element={<Dashboard />} />} />

      <Route path="cars">
        <Route index element={<PrivateRoute element={<ListCars />} />} />
        <Route path="new" element={<PrivateRoute element={<NewCar />} />} />
        <Route path=":id" element={<PrivateRoute element={<EditCar />} />} />
      </Route>

      <Route path="categories">
        <Route index element={<PrivateRoute element={<ListCategories />} />} />
        <Route
          path="new"
          element={<PrivateRoute element={<NewCategory />} />}
        />
        <Route
          path=":id"
          element={<PrivateRoute element={<EditCategory />} />}
        />
      </Route>

      <Route path="customers">
        <Route index element={<PrivateRoute element={<ListCustomers />} />} />
        <Route
          path="new"
          element={<PrivateRoute element={<NewCustomer />} />}
        />
        <Route
          path=":id"
          element={<PrivateRoute element={<EditCustomer />} />}
        />
      </Route>

      <Route path="rentals">
        <Route index element={<PrivateRoute element={<ListRentals />} />} />
      </Route>

      <Route path="specifications">
        <Route
          index
          element={<PrivateRoute element={<ListSpecifications />} />}
        />
        <Route
          path="new"
          element={<PrivateRoute element={<NewSpecification />} />}
        />
        <Route
          path=":id"
          element={<PrivateRoute element={<EditSpecification />} />}
        />
      </Route>
    </Routes>
  );
}
