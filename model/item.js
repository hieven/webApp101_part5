function itemSchema(mongoose) {
  var Schema = mongoose.Schema;

  return new Schema({
    name: String,
    done: Boolean,
    createAt: {
      type: Date,
      default: Date.now
    },
    updateAt: {
      type: Date,
      default: Date.now
    }
  });
}

exports.itemSchema = itemSchema;