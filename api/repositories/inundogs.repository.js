const { connect } = require("../config/db.config");
const { Inundogs } = require("../models/inundogs.model");
const logger = require("../logger/api.logger");
const _ = require("lodash");
class InundogsRepository {
  constructor() {
    connect();
  }

  async getFilteredInundogs(filtro, page, limit) {
    const startIndex = (page - 1) * limit;

    const totalDocuments = await Inundogs.countDocuments(filtro).exec();
    const totalPages = Math.ceil(totalDocuments / limit);

    const inundogs = await Inundogs.find(filtro)
      .limit(limit)
      .skip(startIndex)
      .sort({ createdAt: -1 })
      .exec();

    return { inundogs, totalPages, currentPage: page };
  }

  async getEnderecoList() {
    try {
      const enderecosUnicos = await Inundogs.aggregate([
        { $group: { _id: "$endereco" } },
        { $project: { _id: 0, endereco: "$_id" } },
      ]);

      return enderecosUnicos;
    } catch (err) {
      logger.error("Error::" + err);
    }
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
