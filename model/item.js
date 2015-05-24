function itemSchema(mongoose) {
  var Schema = mongoose.Schema;
  return new Schema({
    name: String
  });
}

exports.itemSchema = itemSchema;