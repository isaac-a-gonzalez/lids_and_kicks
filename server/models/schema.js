const mongoose = require('mongoose');

const SizeSchema = new mongoose.Schema({
  size: {
    type: Number,
    required: [false, '{PATH} is required'],
  },

}, { timestamps: true });

mongoose.model('Size', SizeSchema);

const ShoeSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '{PATH} is required'],
    minlength: [2, '{PATH} must be at least {MINLENGTH} characters']
  },
  brand: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [2, '{PATH} must be at least {MINLENGTH} characters']
  },
  material: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [2, '{PATH} must be at least {MINLENGTH} characters']
  },
  color: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [3, '{PATH} must be at least {MINLENGTH} characters']
  },
  price: {
    type: Number,
    required: [true, "{PATH} is required."],
    minlength: [4, '{PATH} must be at least {MINLENGTH} characters']
  },
  style: {
    type: String,
    required: [true, "{PATH} is required."],
  },
  image: {
    type: String,
    required: [true, "{PATH} is required."],
  },
  size: [SizeSchema]
}, { timestamps: true });

mongoose.model('Shoe', ShoeSchema);

const HatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '{PATH} is required'],
    minlength: [2, '{PATH} must be at least {MINLENGTH} characters']
  },
  brand: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [2, '{PATH} must be at least {MINLENGTH} characters']
  },
  color: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [3, '{PATH} must be at least {MINLENGTH} characters']
  },
  price: {
    type: Number,
    required: [true, "{PATH} is required."],
    minlength: [4, '{PATH} must be at least {MINLENGTH} characters']
  },
  style: {
    type: String,
    required: [true, "{PATH} is required."],
  },
  image: {
    type: String,
    required: [true, "{PATH} is required."],
  },
  size: [SizeSchema]
}, { timestamps: true });

mongoose.model('Hat', HatSchema);

const SunglassesSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '{PATH} is required'],
    minlength: [2, '{PATH} must be at least {MINLENGTH} characters']
  },
  brand: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [2, '{PATH} must be at least {MINLENGTH} characters']
  },
  material: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [2, '{PATH} must be at least {MINLENGTH} characters']
  },
  color: {
    type: String,
    required: [true, "{PATH} is required."],
    minlength: [3, '{PATH} must be at least {MINLENGTH} characters']
  },
  price: {
    type: Number,
    required: [true, "{PATH} is required."],
    minlength: [4, '{PATH} must be at least {MINLENGTH} characters']
  },
  image: {
    type: String,
    required: [true, "{PATH} is required."],
  },
}, { timestamps: true });

mongoose.model('Sunglasses', SunglassesSchema);
