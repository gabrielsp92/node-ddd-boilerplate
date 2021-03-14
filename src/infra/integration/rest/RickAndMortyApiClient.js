class RickAndMortyApiClient {
  constructor({ axios, config, logger }) {
    this.config = config.integration.rest.rickAndMorty;
    this.logger = logger;
    this.setHttpClient(axios);
  }

  setHttpClient(axios) {
    const { baseURL, timeout } = this.config;
    this.httpClient = axios.create({
      baseURL,
      timeout,
    });
  }

  _setQueryParams(query) {
    const { page, name, status, species, type, gender } = query;

    let params = []
    if (page) params.push(`page=${page}`)
    if (name) params.push(`name=${name}`)
    if (status) params.push(`status=${status}`)
    if (species) params.push(`species=${species}`)
    if (type) params.push(`type=${type}`)
    if (gender) params.push(`gender=${gender}`)
    
    return params 
      ? '?' + params.join('&') 
      : ''
  }

  async findCharacters(query) {
    const queryParams = this._setQueryParams(query);
    this.logger.info(this.config.externalCallMsg + 'To find characters')
    try {
      const { data } = await this.httpClient.get(`/character/${queryParams}`)
      return { data };
    } catch (error) {
      return { error };
    }
  };
  
}

module.exports = RickAndMortyApiClient;