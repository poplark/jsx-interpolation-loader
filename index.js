const handlebars = require('handlebars');

module.exports = function(source) {
  const { engine='handlebars', rules=[] } = this.query;
  let _engine;
  if('string' == typeof engine) {
    if('handlebars' == engine) {
      _engine = require('handlebars');
    } else if('ejs' == engine) {
      _engine = require('ejs');
    } else {
      throw new Error(`Unknown template engine - ${engine}, you can use handlebars or ejs to replace with it.\n
        Or you can use require('${engine}') to replace with it.`);
    }
  } else if('function' == typeof engine.compile) {
    _engine = engine;
  } else {
    throw new Error(`Unknown template engine - ${engine}, you can use handlebars or ejs to replace with it.\n
      Or you can use require('${engine}') to replace with it.`);
  }

  for (let rule of rules) {
    if(rule.filename.test(this.resourcePath)) {
      let template = _engine.compile(source);
      let content = template(rule.interpolations);
      return content;
    }
  }
  return source;
};
