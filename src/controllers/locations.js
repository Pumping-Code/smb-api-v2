import { Location } from '../models';

module.exports = {
  add(req, res) {
    return Location
      .create({
        location: req.body.location,
        userId: req.params.userId,
      })
      .then(location => res.status(201).send(location))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return Location.findAll()
      .then(locations => res.status(200).send(locations))
      .catch(error => res.status(400).send(error));
  },
};
