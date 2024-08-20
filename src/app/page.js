// app/page.js
import mongoose from '../../lib/mongoose';
import ProductModel from '../../models/product';
import ClientSideProducts from '../components/ClientSideProducts';

export default async function Home() {
  await mongoose.connect(process.env.MONGODB_URL);
  const products = await ProductModel.find().lean();

  return (
    <div className="p-5">
      <ClientSideProducts products={products} />
    </div>
  );
}
