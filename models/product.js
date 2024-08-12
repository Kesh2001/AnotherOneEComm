const { Schema } = require("mongoose");

const ProductSchema = new Schema(
    {Pname: String,
        description: String,
        price: Number,
        category: String,
        picture: String,
    }
);

