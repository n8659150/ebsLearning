export default {
    install(Vue, options) {
        Vue.prototype.applicationHost = '127.0.0.1:3000',
            Vue.prototype.videoHost = '172.30.50.101',
            Vue.prototype.fetchData = function(category) {
                const url = 'http://' + this.applicationHost + '/' + category;
                return Vue.http.get(url)
<<<<<<< HEAD
=======
            },
            Vue.prototype.fuzzyQuery = function(keywords) {
                const url = 'http://' + this.applicationHost + '/all?q=' + keywords;
                return Vue.http.get(url)
>>>>>>> dev
            }
    }
}