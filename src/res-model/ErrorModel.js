class ErrorModel {
  constructor(status = -1, message = "error") {
    this.status = status;
    this.message = message;
  }
}

module.exports = ErrorModel;
