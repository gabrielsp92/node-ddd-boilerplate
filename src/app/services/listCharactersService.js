module.exports = ({ rickAndMortyApiClient }) => ({
  execute: async function(query) {
    const { data, error } = await rickAndMortyApiClient.findCharacters(query);
    return { data, error };
  }
});