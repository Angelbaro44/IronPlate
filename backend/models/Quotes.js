const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    quote_title: String,
    quote_body: String,
    quote_source: String,
    quote_by:String
  },
  {
    timestamps: true,
    versionKey: false
  }
);


module.exports = model('Quotes', userSchema);