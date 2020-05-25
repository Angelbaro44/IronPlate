const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    welcomeText: String,
    missionStatment: String,
  },
  {
    timestamps: true,
    versionKey: false
  }
);


module.exports = model('AdminData', userSchema);
