const handlebars = require('handlebars');

module.exports = function(source){
  const rules = this.query.rules || [];

  for (let rule of rules) {
    if(rule.filename.test(this.resourcePath)) {
      let template = handlebars.compile(source);
      let content = template(rule.interpolations);
      return content;
    }
  }
  return source;
};
