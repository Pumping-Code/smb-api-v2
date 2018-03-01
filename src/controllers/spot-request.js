import { SpotRequest } from '../models';

module.exports = {
  add(req, res) {
    return SpotRequest
      .create({
        userId: req.body.userId,
      })
      .then(spotRequest => res.status(201).send(spotRequest))
      .catch(error => res.status(400).send(error));
  },
  accept(req, res) {
    return SpotRequest
      .find({
        where: {
          id: req.params.requestId,
        },
      })
      .then((spotRequest) => {
        if (!spotRequest) {
          return res.status(404).send({
            message: 'Spot Request not found',
          });
        }

        if (spotRequest.userId === req.body.userId) {
          return res.status(404).send({
            message: 'You cannot accept your own spot requests',
          });
        }

        return spotRequest
          .update({
            fulfilledBy: req.body.userId || spotRequest.userId,
          });
      })
      .then((updatedSpotrequest => res.status(200).send(updatedSpotrequest)))
      .catch(error => res.status(400).send(error));
  },
  list(req, res) {
    return SpotRequest.findAll()
      .then(spotRequests => res.status(200).send(spotRequests))
      .catch(error => res.status(400).send(error));
  },
};
