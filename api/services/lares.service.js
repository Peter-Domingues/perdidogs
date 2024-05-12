const laresRepository = require("../repositories/lares.repository");

class LaresService {
  constructor() {}

  async getFilteredLares(filtro, page, limit) {
    return await laresRepository.getFilteredLares(filtro, page, limit);
  }

  async createLar(lar) {
    return await laresRepository.createLar(lar);
  }

  async updateLar(larId, lar) {
    return await laresRepository.updateLar(larId, lar);
  }

  async deleteLar(larId) {
    return await laresRepository.deleteLar(larId);
  }
}

module.exports = new LaresService();
