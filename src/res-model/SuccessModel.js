class SuccessModel {
  constructor(data) {
    this.status = 0;
    if (data !== null) {
      this.data = data;
    }
  }
}

module.exports = SuccessModel;
