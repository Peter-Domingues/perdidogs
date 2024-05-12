const sumidogsRepository = require("../repositories/sumidogs.repository");

class SumidogsService {
  constructor() {}

  async getFilteredSumidogs(filtro, page, limit) {
    return await sumidogsRepository.getFilteredSumidogs(filtro, page, limit);
  }

  async createSumidog(sumidog) {
    return await sumidogsRepository.createSumidog(sumidog);
  }

  async updateSumidog(sumidogId, sumidog) {
    return await sumidogsRepository.updateSumidog(sumidogId, sumidog);
  }

  async deleteSumidog(sumidogId) {
    return await sumidogsRepository.deleteSumidog(sumidogId);
  }
}

module.exports = new SumidogsService();
