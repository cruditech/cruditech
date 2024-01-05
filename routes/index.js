var router = require('express').Router();
const { requiresAuth } = require('express-openid-connect');

router.get('/', function (req, res, next) {
  res.render('portfolio-masonry');
  // , {
  //   title: 'Cruditech',
  //   isAuthenticated: req.oidc.isAuthenticated()
  // });
});

router.get('/disclosure', function (req, res, next) {
  res.render('disclosure');
});

router.get('/eula', function (req, res, next) {
  res.render('eula');
});

router.get('/privacy', function (req, res, next) {
  res.render('privacy-policy');
});

router.get('/returns', function (req, res, next) {
  res.render('return-policy');
});

router.get('/terms', function (req, res, next) {
  res.render('terms-of-use');
});

router.get('/use', function (req, res, next) {
  res.render('acceptable-use');
});

router.get('/profile', requiresAuth(), function (req, res, next) {
  res.render('profile', {
    userProfile: JSON.stringify(req.oidc.user, null, 2),
    title: 'Profile page'
  });
});

module.exports = router;
