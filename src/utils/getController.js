const UserController = require('../controllers/UserController');
const CareUnitController = require('../controllers/CareUnitController');
const TypeCareUnitController = require('../controllers/TypeCareUnitController');
const ConsultTypeController = require('../controllers/ConsultTypeController');
const ConsultController = require('../controllers/ConsultController');
const DoctorController = require('../controllers/DoctorController');
const FeedbackOpnionController = require('../controllers/FeedbackOpnionController');
const FeedBackController = require('../controllers/FeedbackController');
const SessionService = require('../services/SessionService');

module.exports = {
    UserController,
    CareUnitController,
    TypeCareUnitController,
    ConsultTypeController,
    ConsultController,
    DoctorController,
    FeedbackOpnionController,
    FeedBackController,
    SessionService,
};