import req from '../libs/req';
import requestLoading from "../libs/requestLoading";

/**
 * model继承该类， 可以多模块复用
 * 
 */
export default class AbstractModel {
    /**
     * @param {string} path 
     */
    constructor(path){
        this.path = path;
        this.codes = [];        
    }
    /**
     * @param {object} options 
     * @param {string} options.method 
     * @param {number} options.timeout 
     * @param {Function} options.success 
     * @param {Function} options.error
     * @param {Function} options.complete
     * @param {boolean} options.loading 
     */
    update(options = {}) {
        options.method = String(options.method || 'post').toUpperCase();
                
        // loading 是否加loading


        req(this.path, {
            ...options,
            success: (data, ret) => {
                if(options.success) options.success(data, ret);
            },
            error: (err) => {
                if(options.error) options.error(err);
            },
            complete: () => {
                if(options.complete) options.complete();
            }
        })
    }

}