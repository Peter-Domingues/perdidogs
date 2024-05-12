const { connect } = require("../config/db.config");
const { Sumidogs } = require("../models/sumidogs.model");
const logger = require("../logger/api.logger");
const _ = require("lodash");

class SumidogsRepository {
  constructor() {
    connect();
  }

  async getFilteredSumidogs(filtro, page, limit) {
    const startIndex = (page - 1) * limit;

    const totalDocuments = await Sumidogs.countDocuments(filtro).exec();
    const totalPages = Math.ceil(totalDocuments / limit);

    const sumidogs = await Sumidogs.find(filtro)
      .limit(limit)
      .skip(startIndex)
      .sort({ createdAt: -1 })
      .exec();

    return { values: sumidogs, totalPages, currentPage: page };
  }

  async createSumidog(sumidog) {
    let data = {};
    try {
      data = await Sumidogs.create(sumidog);
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async updateSumidog(sumidogId, sumidog) {
    let data = {};
    try {
      data = await Sumidogs.updateOne(sumidogId, sumidog);
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async deleteSumidog(sumidogId) {
    let data = {};
    try {
      data = await Sumidogs.deleteOne({ _id: sumidogId });
    } catch (err) {
      logger.error("Error::" + err);
    }
    return { status: `${data.deletedCount > 0 ? true : false}` };
  }
}

module.exports = new SumidogsRepository();
