import { monarchCatsGreet } from "./monarchCatsGreet";

export const morningGreet = (name: string) => {
  const monarchGreet = monarchCatsGreet(name);
  return "Good morning " + monarchGreet + name;
};
