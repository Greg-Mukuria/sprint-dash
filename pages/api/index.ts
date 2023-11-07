import { NextApiRequest, NextApiResponse } from 'next';

export default (req: NextApiRequest, res: NextApiResponse) => {
  const message = {
    message: 'Hello, this is a simple API endpoint in JavaScript!',
  };

  res.json(message);
};

