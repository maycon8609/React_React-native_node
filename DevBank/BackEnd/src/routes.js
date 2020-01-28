const { Router } = require('express');
const AccountController = require('./controllers/AccountController');

const routes = Router();

routes.get('/accounts', AccountController.index);
routes.post('/account', AccountController.store);
routes.put('/deposit', AccountController.deposit);
routes.put('/withdraw', AccountController.withdraw);
routes.put('/transfer', AccountController.transfer);
routes.delete('/delete', AccountController.closeAccount);

module.exports = routes;