const { Router } = require('express');
const { getSportData } = require('./controllers');
const router = Router();

router.param(
  'name',
  (req, res, next, name) => ((req.sport = name), next()) // comma eval (L, return R)
);

router.route('/sport/:name').get(getSportData);

module.exports = router;
