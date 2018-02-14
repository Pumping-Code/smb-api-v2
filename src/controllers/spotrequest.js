import { SpotRequest } from '../models';

module.exports = {
  add(req, res) {
    return SpotRequest
      .create({
        userId: req.body.userId,
      })
      .then(spotrequest => res.status(201).send(spotrequest))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return SpotRequest.findAll()
      .then(spotrequests => res.status(200).send(spotrequests))
      .catch(error => res.status(400).send(error));
  },
};
