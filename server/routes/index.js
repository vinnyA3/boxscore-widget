const { Router } = require('express');
const { getLeagueData } = require('./controllers');
const router = Router();

router.param(
  'name',
  (req, res, next, name) => ((req.league = name), next()) // comma eval (L, return R)
);

router.route('/league/:name').get(getLeagueData);

module.exports = router;
