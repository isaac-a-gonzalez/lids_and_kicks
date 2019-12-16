const mongoose = require('mongoose');
const Sunglasses = mongoose.model('Sunglasses');

module.exports = {
  all(request, response) {
    // find all
    Sunglasses.find()
      .then((sunglasses) => {
        response.json({ sunglasses: sunglasses });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  create(request, response) {
    Sunglasses.create(request.body)
      .then((newSunglasses) => {
        response.json({ sunglasses: newSunglasses });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  getOne(request, response) {
    Sunglasses.findById(request.params.id)
      .then((sunglasses) => {
        response.json({ sunglasses: sunglasses });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  delete(request, response) {
    Sunglasses.findByIdAndDelete(request.params.id)
      .then((deletedSunglasses) => {
        response.json({ sunglasses: deletedSunglasses });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  update(request, response) {
    Sunglasses.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true, // to return updated doc
        runValidators: true
      }
    )
      .then((updatedSunglasses) => {
        response.json({ sunglasses: updatedSunglasses });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  }
}
