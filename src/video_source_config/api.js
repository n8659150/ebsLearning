export default {
    install(Vue, options) {
        Vue.prototype.applicationHost = '172.30.50.101:3000',
            Vue.prototype.videoHost = '172.30.50.101/web_server',
            Vue.prototype.fetchData = function(category) {
                const url = 'http://' + this.applicationHost + '/' + category;
                return Vue.http.get(url)
            },
            Vue.prototype.fuzzyQuery = function(keywords) {
                const url = 'http://' + this.applicationHost + '/all?q=' + keywords;
                return Vue.http.get(url)
            },
            Vue.prototype.fetchDataById = function(id) {
                const url = 'http://' + this.applicationHost + '/all?id=' + id;
                return Vue.http.get(url)
            }
    }
}