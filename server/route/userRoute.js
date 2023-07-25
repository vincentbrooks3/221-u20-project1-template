const express = require('express');
const router = express.Router( );

const userController = require('../controller/userController');

router.route('/apli/feedItem')
   .get( (req, res) => {
    feedItemController.savefeedItem(req, res);
   })
   .post((req, res) => {
    feedItemController.savefeedItem(req, res);
   })

router.route('/api/feedItem/:feedItemID')
  .get( (req, res) => {
    feedItemController.getfeedItem (req, res);
  })
  .delete( (req, res) => {
    feedItemController.deltefeedItem (req,res);
  })
  .patch( (req, res) => {
    feedItemController.updatefeedItem (req, res)
  })

module.exports = router;