const mongoose = require('mongoose');
const Hat = mongoose.model('Hat');

module.exports = {
  all(request, response) {
    // find all
    Hat.find()
      .then((hats) => {
        response.json({ hats: hats });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  create(request, response) {
    Hat.create(request.body)
      .then((newHat) => {
        response.json({ hat: newHat });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  getOne(request, response) {
    Hat.findById(request.params.id)
      .then((hat) => {
        response.json({ hat: hat });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  delete(request, response) {
    Hat.findByIdAndDelete(request.params.id)
      .then((deletedHats) => {
        response.json({ hats: deletedHats });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  },

  update(request, response) {
    Hat.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true, // to return updated doc
        runValidators: true
      }
    )
      .then((updatedHat) => {
        response.json({ hat: updatedHat });
      })
      .catch((errors) => {
        response.json({ errors: errors });
      });
  }

}
