const shoesController = require('../controllers/shoes');
const hatsController = require('../controllers/hats');
const sunglassesController = require('../controllers/sunglasses');
const sizeController = require('../controllers/size');

module.exports = function (app) {
  app.get('/api/shoes', shoesController.all);
  app.get('/api/getshoes/:id', shoesController.getOne);
  app.post('/api/shoes', shoesController.create);
  app.delete('/api/shoes/:id', shoesController.delete);
  app.put('/api/editshoe/:id', shoesController.update);


  app.get('/api/hats', hatsController.all);
  app.get('/api/gethat/:id', hatsController.getOne);
  app.post('/api/hats', hatsController.create);
  app.delete('/api/hats/:id', hatsController.delete);
  app.put('/api/edithat/:id', hatsController.update);


  app.get('/api/sunglasses', sunglassesController.all);
  app.get('/api/getsunglasses/:id', sunglassesController.getOne);
  app.post('/api/sunglasses', sunglassesController.create);
  app.delete('/api/sunglasses/:id', sunglassesController.delete);
  app.put('/api/editshades/:id', sunglassesController.update);

  app.post('/api/viewhat/:id/size', sizeController.hat);
  app.post('/api/viewshoes/:id/size', sizeController.shoe);
}
