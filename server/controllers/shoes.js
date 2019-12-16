const mongoose = require('mongoose');
const Shoe = mongoose.model('Shoe');

module.exports = {
  all(request, response) {
    // find all
    Shoe.find()
      .then((shoes) => {
        response.json({ shoes: shoes });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  create(request, response) {
    Shoe.create(request.body)
      .then((newShoe) => {
        response.json({ shoe: newShoe });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  getOne(request, response) {
    Shoe.findById(request.params.id)
      .then((shoe) => {
        response.json({ shoe: shoe });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  delete(request, response) {
    Shoe.findByIdAndDelete(request.params.id)
      .then((deletedShoes) => {
        response.json({ shoes: deletedShoes });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  update(request, response) {
    Shoe.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true, // to return updated doc
        runValidators: true
      }
    )
      .then((updatedShoe) => {
        response.json({ shoe: updatedShoe });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  }
}
