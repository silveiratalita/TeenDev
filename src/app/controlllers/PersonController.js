import Person from '../models/Person';
import * as yup from 'yup';

class PersonController {
  async store(req, res) {
    const yup = require('yup');
    const { email } = req.body;
    const schema = yup.object().shape({
      name: yup.string().required(),
      type: yup.string().required(),
      documenIdentifier: yup.string().required(),
      adress: yup.string().required(),
      city: yup.string().required(),
      state: yup.string().required(),
      cellphone: yup.string().required(),
      email: yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fail' });
    }
    try {
      console.log(req.body);
      const personExists = await Person.findOne({
        where: { email: req.body.email },
      });
      if (personExists) {
        return res.json({
          error: 'This person already exist, please inform another email',
        });
      }
      const nwePerson = await Person.create(req.body);
      return res.send(nwePerson);
    } catch (err) {
      console.error(err);
    }
  }
}
export default new PersonController();
