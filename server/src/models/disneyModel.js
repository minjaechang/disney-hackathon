const mongoose = require("mongoose");
const { Schema } = mongoose;

const disneySchema = new Schema(
  {
    text: { type: String, required: true },
    weirdness: { type: String, required: true },
    gif: { type: String, required: true },
  },
  {
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id;
        delete ret._id;
        delete ret.__v;
      },
    },
  }
);

const Disney = mongoose.model("Disney", disneySchema);

export default Disney;
