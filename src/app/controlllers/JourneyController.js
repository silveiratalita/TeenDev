
import * as yup from 'yup';
import dayjs from 'dayjs';
import Journey from '../models/Journey';

class JourneyController {
  async store(req, res) {
    const { companyId, schoolId } = req.body;

    const startDate = dayjs(req.body.startDate).format('YYYY-MM-DDTHH:mm:ssZ');
    const endData = dayjs(req.body.endData).format('YYYY-MM-DDTHH:mm:ssZ');

    req.body.endData = endData;
    req.body.startDate = startDate;

    const yup = require('yup');
    const schema = yup.object().shape({
      startDate: yup.string().required(),
      endData: yup.string().required(),
      companyId: yup.number().required(),
      schoolId: yup.number().required(),
    });

    console.log(req.body);
    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fail' });
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
