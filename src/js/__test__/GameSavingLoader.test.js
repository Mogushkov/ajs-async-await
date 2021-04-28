import GameSavingLoader from '../GameSavingLoader';

test('test async', async () => {
  expect.assertions(1);
  const result = await GameSavingLoader.load();
  expect(result).toEqual({
    created: 1546300800,
    id: 9,
    userInfo: {
      id: 1,
      level: 10,
      name: 'Hitman',
      points: 2000,
    },
  });
});