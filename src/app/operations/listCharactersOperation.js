module.exports = ({ listCharactersService, logger }) => ({
  execute: async function(query) {
    const { data, error } = await listCharactersService.execute(query);
    return data;
  }
});