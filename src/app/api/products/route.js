import mongoose from '../../../../lib/mongoose';
import Product from '../../../../models/product';

export async function GET(req) {
  try {
    const products = await Product.find();
    return new Response(JSON.stringify(products), { status: 200 });
  } catch (error) {
    console.error('Error fetching products:', error);
    return new Response('Error fetching products', { status: 500 });
  }
}
