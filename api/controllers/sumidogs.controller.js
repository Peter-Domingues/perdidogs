const sumidogsService = require("../services/sumidogs.service");
const logger = require("../logger/api.logger");

class SumidogsController {
  async getFilteredSumidogs(filtro, page, limit) {
    logger.info("Controller: getFilteredSumidogs", filtro);
    return await sumidogsService.getFilteredSumidogs(filtro, page, limit);
  }

  async createSumidog(sumidog) {
    logger.info("Controller: createSumidog", sumidog);
    return await sumidogsService.createSumidog(sumidog);
  }

  async updateSumidog(sumidogId, sumidog) {
    logger.info("Controller: updateSumidog", sumidog);
    return await sumidogsService.updateSumidog(sumidogId, sumidog);
  }

  async deleteSumidog(sumidogId) {
    logger.info("Controller: deleteSumidog", sumidogId);
    return await sumidogsService.deleteSumidog(sumidogId);
  }
}
module.exports = new SumidogsController();
