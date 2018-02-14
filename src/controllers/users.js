import { User } from '../models';

module.exports = {
  create(req, res) {
    return User
      .create({
        fullName: req.body.fullName,
        pushToken: req.body.pushToken,
        fbId: req.body.fbId,
      })
      .then(user => res.status(201).send(user))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return User.findAll({
      // include: [{
      //   model: User,
      //   as: 'locations',
      // }],
    })
      .then(users => res.status(200).send(users))
      .catch(error => res.status(400).send(error));
  },
};
