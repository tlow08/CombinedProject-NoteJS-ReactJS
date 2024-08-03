import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        description: String,
        products: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: "Product",
            },
        ],
        isHidden: {
            type: Boolean,
            default: false,
        },
        slug: String,
    },
    {timestampsL: true, versionKey: false}
);

export default mongoose.model("Category", categorySchema);