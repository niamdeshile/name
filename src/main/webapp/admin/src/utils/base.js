const base = {
    get() {
                return {
            url : "http://localhost:8080/ssmmp65k/",
            name: "ssmmp65k",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/ssmmp65k/front/index.html'
        };
            },
    getProjectName(){
        return {
            projectName: "江门环保公益网"
        } 
    }
}
export default base
