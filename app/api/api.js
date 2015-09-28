const HOST = "https://www.v2ex.com"

module.exports = {

  getNew: HOST + "/api/topics/latest.json",
  getHot: HOST + "/api/topics/hot.json",
  getAllNodes: HOST + "/api/nodes/all.json",
  getUserInfos: HOST + "/api/members/show.json?id=1"

}
