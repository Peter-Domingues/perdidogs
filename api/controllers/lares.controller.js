const laresService = require("../services/lares.service");
const logger = require("../logger/api.logger");

class LaresController {
  async getFilteredLares(filtro, page, limit) {
    logger.info("Controller: getFilteredLares", filtro);
    return await laresService.getFilteredLares(filtro, page, limit);
  }

  async createLar(lar) {
    logger.info("Controller: createLar", lar);
    return await laresService.createLar(lar);
  }

  async updateLar(larId, lar) {
    logger.info("Controller: updateLar", lar);
    return await laresService.updateLar(larId, lar);
  }

  async deleteLar(larId) {
    logger.info("Controller: deleteLar", larId);
    return await laresService.deleteLar(larId);
  }
}
module.exports = new LaresController();
