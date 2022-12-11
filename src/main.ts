import { greet } from "./Greeter";

import express from 'express';

function main(): void {
  const app = express();
  const port = 3000;

  app.get("/", (req: express.Request, res: express.Response) => {
    greet((message) => res.json({ message }));
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main();
