const mongoose = require('mongoose');
const Shoe = mongoose.model('Shoe');
const Hat = mongoose.model('Hat');
const Size = mongoose.model('Size');


module.exports = {
  hat(req, res) {
    Hat.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          size: new Size(req.body)
        }
      },
      {
        runValidators: true,
        new: true // will return updated document rather than old one
      }
    )
      .then((updatedHat) => {
        res.json({ hat: updatedHat });
      })
      .catch((errors) => {
        res.json({ errors: errors });
      });
  },

  shoe(req, res) {
    Shoe.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          size: new Size(req.body)
        }
      },
      {
        runValidators: true,
        new: true // will return updated document rather than old one
      }
    )
      .then((updatedShoe) => {
        res.json({ shoe: updatedShoe });
      })
      .catch((errors) => {
        res.json({ errors: errors });
      });
  }
}
