// app/page.js
import mongoose from '../../lib/mongoose';
import ProductModel from '../../models/product';
import ClientSideProducts from '../components/ClientSideProducts';
import Footer from '../components/Footer';
import Layout from '../components/Layout';

export default async function Home() {
  await mongoose.connect(process.env.MONGODB_URL);
  const products = await ProductModel.find().lean();
  const plainProducts = products.map(product => ({
    ...product,
    _id: product._id.toString(),
    description: product.description.toString(),
    price: product.price.toString(),
    catrgory: product.category.toString(),
    picture: product.picture.toString(),
    name: product.name.toString(),

  }));
  return (
    
    <Layout>
      <ClientSideProducts products={plainProducts} />
    </Layout>
  );
}
