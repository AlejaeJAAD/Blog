import Report from '../models/Report.js'

export const createReport = async (req, res) => {
    const report = await Report.create({ reason, reporterId, reportedId });
    return report;
}

export const updateReport = async (req, res) => {
    const report = await Report.findByPk(id);
    if (!report) {
        throw new Error('Report not found');
    }
    report.reason = reason;
    report.reporterId = reporterId;
    report.reportedId = reportedId;
    await report.save();
    return report;
}

export const deleteReport = async (req, res) => {
    const report = await Report.findByPk(id);
    if (!report) {
        throw new Error('Report not found');
    }
    await report.destroy();
}

export const getAllReportsMadeByUser = async (req, res) => {
    return await Report.findAll({
        where: {
          reporterId: reporterId
        }
    });
}

export const getAllReportsAboutUser = async (req, res) => {
    return await Report.findAll({
        where: {
          reportedId: reportedId
        }
    });
}

export const getReportById = async (req, res) => {
    return await Report.findByPk(id);
}