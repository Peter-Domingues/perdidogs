const { connect } = require("../config/db.config");
const { Inundogs } = require("../models/inundogs.model");
const logger = require("../logger/api.logger");

class InundogsRepository {
  constructor() {
    connect();
  }

  async getFilteredInundogs(filtro, page, limit) {
    const startIndex = (page - 1) * limit;

    const totalDocuments = await Inundogs.countDocuments().exec();
    const totalPages = Math.ceil(totalDocuments / limit);

    const inundogs = await Inundogs.find(filtro)
      .limit(limit)
      .skip(startIndex)
      .exec();

    return { inundogs, totalPages, currentPage: page };
  }

  async createInundog(inundog) {
    let data = {};
    try {
      data = await Inundogs.create(inundog);
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async updateInundog(inundogId, inundog) {
    let data = {};
    try {
      data = await Inundogs.updateOne(inundogId, inundog);
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async deleteInundog(inundogId) {
    let data = {};
    try {
      data = await Inundogs.deleteOne({ _id: inundogId });
    } catch (err) {
      logger.error("Error::" + err);
    }
    return { status: `${data.deletedCount > 0 ? true : false}` };
  }
}

module.exports = new InundogsRepository();
