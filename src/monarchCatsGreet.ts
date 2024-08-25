const monarchCats = ["Garfield", "Felix", "Grumpy"];

export const monarchCatsGreet = (name: string) => {
  if (monarchCats.includes(name)) {
    return ", your majesty ";
  } else {
    return "";
  }
};
