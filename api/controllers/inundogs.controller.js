const inundogsService = require("../services/inundogs.service");
const logger = require("../logger/api.logger");

class InundogsController {
  async getInundogs() {
    logger.info("Controller: getInundogs");
    return await inundogsService.getInundogs();
  }

  async getFilteredInundogs(filtro) {
    logger.info("Controller: getFilteredInundogs", filtro);
    return await inundogsService.getFilteredInundogs(filtro);
  }

  async createInundog(inundog) {
    logger.info("Controller: createInundog", inundog);
    return await inundogsService.createInundog(inundog);
  }

  async updateInundog(inundogId, inundog) {
    logger.info("Controller: updateInundog", inundog);
    return await inundogsService.updateInundog(inundogId, inundog);
  }

  async deleteInundog(inundogId) {
    logger.info("Controller: deleteInundog", inundogId);
    return await inundogsService.deleteInundog(inundogId);
  }
}
module.exports = new InundogsController();
