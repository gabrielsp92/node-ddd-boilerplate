const ListCharactersOperation = require('src/app/operations/listCharactersOperation');
const ListCharactersService = require('src/app/services/listCharactersService');

describe('App :: Operations :: ListCharactersOperation', () => {
  describe('#Execute', () => {
    let operation, listCharactersService, fakeException, fakeRickAndMortyApiClient;
    beforeEach(() => {
      fakeRickAndMortyApiClient = {
        findCharacters: jest.fn(async () => ({ data: [{ id: 1 }], error: null }))
      };
      fakeException = {
        integration: jest.fn()
      };
      listCharactersService = ListCharactersService({ rickAndMortyApiClient: fakeRickAndMortyApiClient })
      operation = ListCharactersOperation({ listCharactersService, exception: fakeException });
    });
    it('Should return fetched data', async () => {
      const data = { name: 'Glootie'};
      const result = await operation.execute(data);
      expect(fakeRickAndMortyApiClient.findCharacters).toHaveBeenCalledWith(data);
      expect(fakeException.integration).not.toHaveBeenCalled();
      expect(result).toEqual([{ id: 1 }]);
    });
  });
  describe('#Execute with client returning an error', () => {
    let operation, listCharactersService, fakeException, fakeRickAndMortyApiClient;
    beforeEach(() => {
      fakeRickAndMortyApiClient = {
        findCharacters: jest.fn(async () => ({ data: null, error: 'Integration Error' }))
      };
      fakeException = {
        integration: jest.fn(() => ({ title: 'Integration Error' }))
      };
      listCharactersService = ListCharactersService({ rickAndMortyApiClient: fakeRickAndMortyApiClient })
      operation = ListCharactersOperation({ listCharactersService, exception: fakeException });
    });
    it('Should throw an integration error', async () => {
      const data = { name: 'Glootie'};
      try {
        await operation.execute(data);
      } catch (err) {
        expect(fakeRickAndMortyApiClient.findCharacters).toHaveBeenCalledWith(data);
        expect(fakeException.integration).toHaveBeenCalledWith('Integration Error');
        expect(err).toEqual({ title: 'Integration Error' });
      }
    });
  });
});