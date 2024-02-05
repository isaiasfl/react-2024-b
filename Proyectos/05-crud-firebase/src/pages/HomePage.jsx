import AddProductForm from "../components/AddProductForm";
import ShowProductsTable from "../components/ShowProductsTable";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold my-8">Crud en React con Firebase</h1>

      <AddProductForm />
      <ShowProductsTable />
    </div>
  );
};

export default HomePage;
