const { connect } = require("../config/db.config");
const { Lares } = require("../models/lares.model");
const logger = require("../logger/api.logger");
const _ = require("lodash");

class LaresRepository {
  constructor() {
    connect();
  }

  async getFilteredLares(filtro, page, limit) {
    const startIndex = (page - 1) * limit;

    const totalDocuments = await Lares.countDocuments(filtro).exec();
    const totalPages = Math.ceil(totalDocuments / limit);

    const lares = await Lares.find(filtro)
      .limit(limit)
      .skip(startIndex)
      .sort({ createdAt: -1 })
      .exec();

    return { values: lares, totalPages, currentPage: page };
  }

  async createLar(lar) {
    let data = {};
    try {
      data = await Lares.create(lar);
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async updateLar(larId, lar) {
    let data = {};
    try {
      data = await Lares.updateOne(larId, lar);
    } catch (err) {
      logger.error("Error::" + err);
    }
    return data;
  }

  async deleteLar(larId) {
    let data = {};
    try {
      data = await Lares.deleteOne({ _id: larId });
    } catch (err) {
      logger.error("Error::" + err);
    }
    return { status: `${data.deletedCount > 0 ? true : false}` };
  }
}

module.exports = new LaresRepository();
