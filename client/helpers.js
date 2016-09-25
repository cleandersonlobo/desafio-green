Template.registerHelper("getInstrutor", function(string) {
  if(string.search('Instrutor:')>0){
    return string.substring(string.indexOf("tor:")+5,string.indexOf("</p>"))
  }
  return "Não informado"
});
