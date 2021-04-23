import GameSavingLoader from '../GameSavingLoader';

test('test promise', (done) => {
  GameSavingLoader.load().then((result) => {
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
  }).catch((err) => err);
  done();
});
