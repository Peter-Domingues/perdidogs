const inundogsRepository = require("../repositories/inundogs.repository");

class InundogsService {
  constructor() {}

  async getInundogs() {
    return await inundogsRepository.getInundogs();
  }

  async getFilteredInundogs(filtro) {
    return await inundogsRepository.getInundogs(filtro);
  }

  async createInundog(inundog) {
    return await inundogsRepository.createInundog(inundog);
  }

  async updateInundog(inundogId, inundog) {
    return await inundogsRepository.updateInundog(inundogId, inundog);
  }

  async deleteInundog(inundogId) {
    return await inundogsRepository.deleteInundog(inundogId);
  }
}

module.exports = new InundogsService();
