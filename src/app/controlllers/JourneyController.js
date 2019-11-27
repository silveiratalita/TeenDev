import Journey from '../models/Journey';
import * as yup from 'yup';
class JourneyController {

  async store(req, res) {
    const yup = require('yup');
    const schema = yup.object().shape({
      start_date: yup.string().required(),
      end_date: yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({error: 'Validation Fail'});
    }
    try {
      console.log(req.body);
      const newJourney = await Journey.create(req.body);
      return res.send(newJourney);
    } catch (err) {
      console.error(err);
    }
  }
}

export default new JourneyController();
