var express = require('express');
var router = express.Router();

/* GET home page. */

var ans = [
    {"author":"一碗虾仁","content":["set方法通过传递模型列表执行一个集合的\"smart(智能)\"的更新。 如果列表中的一个模型尚不在集合中，那么它将被添加; 如果模型已经在集合中，其属性将被合并; 并且如果集合包含不存在于列表中的任何模型，他们将被删除。 以上所有将触发相应的\"add\", \"remove\", 和 \"change\"事件。 返回集合中的模型。 如果您想自定义的行为， 你可以设置选项：{add: false}, {remove: false}, 或 {merge: false}，将其禁用。"],"tags":[],"isMe":true,"picture":[],"hot":0,"discuss":[],"love":false,"id":"bd9002b3-4f11-a00c-22e8"},
    {"author":"一碗虾仁","content":["set方法通过传递模型列表执行一个集合的\"smart(智能)\"的更新。 如果列表中的一个模型尚不在集合中，那么它将被添加; 如果模型已经在集合中，其属性将被合并; 并且如果集合包含不存在于列表中的任何模型，他们将被删除。 以上所有将触发相应的\"add\", \"remove\", 和 \"change\"事件。 返回集合中的模型。 如果您想自定义的行为， 你可以设置选项：{add: false}, {remove: false}, 或 {merge: false}，将其禁用。"],"tags":[],"isMe":true,"picture":[],"hot":0,"discuss":[],"love":false,"id":"bd9002b3-4f11-a00c-22e8-9bb842aa4be3"}
];
router.get('/', function (req, res, next) {
    res.render('communityP');
});

router.get('/community', function (req, res, next) {
    res.render('communityM');
});

router.get('/article',function(req,res,next){
    res.json(ans);
});

router.post('/article',function(req,res,next){
    res.setHeader('Content-Type', 'application/json;charset=utf-8');
    console.log(req.body);
    ans[req.body.id] = req.body;
    res.send({status:"success", message:"add user success"});
    console.log(ans);
});

module.exports = router;
