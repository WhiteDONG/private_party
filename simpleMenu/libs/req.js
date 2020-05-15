import mock from '../mock'
import config from '../config'

class Req {
    constructor(restUrl, params={}){
        // this.path = restUrl;
        
        if(path.indexOf('http') === 0) {
            
        } else {
            this.url = config.url[config.env] + restUrl;
        }

        
        this.header = params.header || {'Content-Type': 'application/x-www-form-urlencoded'};
        this.data = params.data;
        this.method = params.method;
        this.success = params.success;
        this.error = params.error;
        this.complete = params.complete;
        this.sessionTimeout = false; // 会话是否过期
        this.timeout = params.timeout > 0 ? params.timeout : (this.method==='GET'? 10e3: 20e3);

        this._complete = false;
    }

    send(){
        // 超时逻辑，包括获取登录信息
        let timeout = this.timeout;
        if(timeout > 0) {
            setTimeout(()=>{
                this.abort()
            }, timeout)
        }
        
        this.checkLogin((err, session) => {
            if(err !==0 || !session) {
                this.onFail()     
            }

            if(session.code) {
                
            }
        });

    }

    onSuccess(data, ret) {
        if(this._complete)  return;
        try {
            this.success && this.success()
        } catch (error) {
            console.error(this.path, 'success', error);
        }
    }

    onComplete() {
        if(this._complete)  return;
        try {
            this.complete && this.complete()
        } catch (error) {
            console.error(this.path, 'complete', error);
        }
        this._complete = true;
    }

    onFail(err) {
        if(this._complete)  return;
        try {
            this.error && this.error(err)
        } catch (error) {
            console.error(this.path, 'failed', error);
        }
    }

    abort(){
        if(!this._complete) {
            console.warn('abort');
            this.onFail(code.TIMEOUT_ERR);
            this.onComplete();
        }
    }
}

module.exports =(url, params) => {
    const request = new Req(url, params);
    request.send();
}