const inundogsRepository = require("../repositories/inundogs.repository");

class InundogsService {
  constructor() {}

  async getFilteredInundogs(filtro, page, limit) {
    return await inundogsRepository.getFilteredInundogs(filtro, page, limit);
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
