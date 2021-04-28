import json from './parser';
import read from './reader';

export default async function loadGame() {
  try {
    const data = await read();
    const value = await json(data);
    return value;
  } catch (error) {
    return error;
  }
}