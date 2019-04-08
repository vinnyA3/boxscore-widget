export const compose2 = (f, g) => x => f(g(x));

export const toLower = str => str.toLowerCase();
