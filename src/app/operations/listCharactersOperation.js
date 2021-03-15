module.exports = ({ listCharactersService, exception }) => ({
  execute: async function(query) {
    const { data, error } = await listCharactersService.execute(query);
    if (error) throw exception.integration(error);
    return data;
  }
});