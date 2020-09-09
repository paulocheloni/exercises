const getListAnimals = require('./getAnimals');

describe('Quando o tipo do animal, existe', () => {
    test('Retorne a lista de animais', async () => {
        const listDogs = await getListAnimals('Dog');
            expect(listDogs[0].name ).toEqual('Dorminhoco');
            expect(listDogs[1].name).toEqual('Soneca');
        });
    });
  