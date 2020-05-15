var sessionName = "session";
var loginTrigger = function() { return false };
var codeToSession = {};
var successTrigger = function() { return true };
var urlPrefix = "";
var successRes = function(res) { return res; };
var errorTitle = "操作失败";
var errorContent = function(res) { return res; };

var reLoginLimit = 3;
var errorCallback = null;
var mockJSON = false;
var globalData = false;

var session = "";
var sessionFresh = false;
// 正在登陆中，其他请求轮询稍后，避免重复调用登录接口
var isLogining = false;
// 正在查询session有效期中，避免重复调用接口
var isCheckingSession = false;

function checkSession(callback, obj){

}

function doLogin(callback, obj){
    if(session || obj.isLogin) {
        // 缓存中有session, 或者是登陆接口
        
    } else if(isLogining) {
        // 正在登录中，请求轮询稍后，避免重复调用
        setTimeout(() => {
            doLogin(callback, obj);
        }, 500);
    } else {
        // 缓存中无sessiond
        isLogining = true;
        obj.count ++;
        obj._loginStartTime = new Date().getTime();
        
    }
}

