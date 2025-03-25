const mongoose = require("mongoose");
const { Schema } = mongoose;

const payProductSchema = new Schema(
  {
    productName: {
      type: String,
      enum: ["1 Class Package", "10 Class Package", "1 Room Package", "10 Room Package"],
      required: true,
    },
    description: {
      type: String,
      default: "",
    },
    price: {
      type: mongoose.Types.Decimal128,
      required: true,
    },
    point: {
      type: Number,
      required: true,
    },
    img: {
      type: String,
      default: "",
    },
    validDate: {
      type: Date,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
    updatedAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true, // 自動管理 createdAt 和 updatedAt
  }
);

const PayProduct = mongoose.model("PayProduct", payProductSchema);
module.exports = PayProduct;


// 建立object及save到mongodb的範例
// const newPayProduct = new PayProduct({
//     productName: "1 Class Package",       
//     description: "This package includes 1 class session.",
//     price: mongoose.Types.Decimal128.fromString("29.99"),
//     point: 100,
//     img: "https://example.com/product1.jpg",
//     validDate: new Date("2025-12-31"),
// });

//object建立完後，使用save()方法將資料存入mongodb
// newPayProduct
//   .save()
//   .then((savedDoc) => {
//     console.log("儲存完畢, 資料是:");
//     console.log(savedDoc);
//   })
//   .catch((e) => {
//     console.log(e);
//   });
