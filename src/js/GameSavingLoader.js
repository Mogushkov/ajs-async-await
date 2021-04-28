import json from './parser';
import read from './reader';

export default class GameSavingLoader {
  static async load() {
    try {
      const data = await read();
      const value = await json(data);
      return Promise.resolve(JSON.parse(value));
    } catch (error) {
      return Promise.reject(error);
    }
  }
}
