window.onload = function(){
    var allList = $("tab_header").getElementsByTagName("li");
    var allDom = $("tab_content").getElementsByClassName("dom");
    console.log(allList,allDom);
    for(var i = 0 ;i<allList.length;i++){
        var li = allList[i];
        li.index = i;
        li.onmouseover = function () {
            for (var j = 0 ;j<allList.length;j++){
                allList[j].className="";
                allDom[j].style.display="none";
            }
            this.className = "selected";
            allDom[this.index].style.display="block";
        };
    }

};

function $(id) {
    return typeof id === "string"? document.getElementById(id) : null;
}