const HOST = "https://www.v2ex.com/api/"

module.exports = {

  getAll: function(){
    return HOST + "topics/latest.json"
  }

}
