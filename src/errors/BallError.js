const AppError = require('./AppError');

/**
 * 볼 관련 에러를 처리하는 클래스
 * @extends AppError
 */
class BallError extends AppError {}

module.exports = BallError;
