function model(c){
    var t='', s='', tp='', i='',d='';
    if(c==1){
        t='灌篮高手'; s='鼓楼校区体育馆'; tp='篮球活动';
        d='学习了一整周，一起去体育馆打球，放松心情吧';
    }else if(c==2){
        t='羽毛球'; s='鼓楼校区体育馆'; tp='羽毛球活动';
        d='学习了一整周，一起去体育馆打球，放松心情吧';
    }else if(c==3){
        t='奔跑吧，兄弟'; s='鼓楼校区操场'; tp='跑步活动';
        d='"好雨知时节，当春乃发生"，周末是难得的晴天，去操场一起运动吧';
    }else if(c==4){
        t='打篮球'; s='鼓楼校区体育馆'; tp='篮球活动'; i='卢海龙;roastedeggs;小天使;';
        d='学习了一整周，一起去体育馆打球，放松心情吧';
    }else if(c==5){
        t='羽毛球活动'; s='鼓楼校区体育馆'; tp='羽毛球活动'; i='卢海龙;roastedeggs;小天使;';
        d='学习了一整周，一起去体育馆打球，放松心情吧';
    }else{
        t='奔跑吧，兄弟'; s='鼓楼校区操场'; tp='跑步活动';i='卢海龙;roastedeggs;小天使;';
        d='"好雨知时节，当春乃发生"，周末是难得的晴天，去操场一起运动吧';
    }
    document.getElementById("title").value=t;
    document.getElementById("spot").value=s;
    document.getElementById("type").value=tp;
    if(i!='')
        document.getElementById("invite").value=i;
    document.getElementById("describe").value=d;
}
function add(c){
    if(c==1){
        document.getElementById("invite").value+='卢海龙;';
    }else if(c==2){
        document.getElementById("invite").value+='roastedeggs;';
    }else if(c==3){
        document.getElementById("invite").value+='小天使;';
    }else if(c==4){
        document.getElementById("invite").value+='panda;';
    }else if(c==5){
        document.getElementById("invite").value+='charles;';
    }else{
        document.getElementById("invite").value+='pyk;';
    }
}
function clean(){
    document.getElementById("title").value='';
    document.getElementById("spot").value='';
    document.getElementById("type").value='';
    document.getElementById("people").value='';
    document.getElementById("invite").value='';
    document.getElementById("describe").value='';
}
function submit(){
    var t = document.getElementById("title").value;
    var d = document.getElementById("date").value;
    var s = document.getElementById("spot").value;
    var tp = document.getElementById("type").value;
    var p = document.getElementById("people").value;
    var i = document.getElementById("invite").value;
    var de = document.getElementById("describe").value;

    var all = document.getElementById("all");
    var per = document.createElement("div");
    per.setAttribute("class","per-activity");
    var head = document.createElement("div");
    head.setAttribute("class","activity-head-holder");
    head.innerHTML="<h1>"+t+"</h1><h4><span>1/"+p+"</span> 人参与</h4>";
    per.appendChild(head);

    var address = document.createElement("div");
    address.setAttribute("class","activity-time-address-holder");
    address.innerHTML="<h1><i class='fa-fa fa-clock-o'></i>"+d.substring(5,10)+"</h1>"+
    "<h1><i class='material-icons small-icon'>location_on</i>"+s+"</h1> ";
    per.appendChild(address);

    var photo = document.createElement("div");
    photo.setAttribute("class","photo-holder");
    photo.innerHTML="<span class='photo-item'> <img src='images/basketball.png'> <span class='icover'></span> </span>"+
        "<span class='photo-item'> <img src='images/soccer.png'> <span class='icover'></span> </span>"+
        "<span class='photo-item'> <img src='images/tennis.png'> <span class='icover'></span> </span> ";
    per.appendChild(photo);

    var activity = document.createElement("div");
    activity.setAttribute("class","activity-description");
    activity.innerHTML="<p>"+de+"</p>";
    per.appendChild(activity);

    var comment = document.createElement("div");
    comment.setAttribute("class","per-activity-footer");
    comment.innerHTML="<h5 class='per-activity-footer-h5-none text-hide' >加入他们</h5>"+
    "<a href='activityDetail.html'>查看详情</a>";
    per.appendChild(comment);
    var c = all.children;
    all.insertBefore(per,c[1]);

    var btn = document.getElementById("close");
    btn.click();
    clean();
}

function finish(btn){
    activeBtn(btn);
    var all = document.getElementById("all");
    var ch = all.children;
    for(var j = 1;j<2;j++){
        all.removeChild(ch[j]);
    }
    var arr=["灌篮高手","羽毛球活动","奔跑吧兄弟"];
    for(var i = 0;i<3;i++) {
        var per = document.createElement("div");
        per.setAttribute("class", "per-activity");
        var head = document.createElement("div");
        head.setAttribute("class", "activity-head-holder");
        head.innerHTML = "<h1 style='color: #DE7E73'>"+arr[i]+"</h1><h4><span>10/12</span> 人参与</h4>";
        per.appendChild(head);

        var address = document.createElement("div");
        address.setAttribute("class", "activity-time-address-holder");
        var a = 10 + i;
        address.innerHTML = "<h1><i class='fa-fa fa-clock-o'></i>3月"+a+"日</h1>" +
            "<h1><i class='material-icons small-icon'>location_on</i>" + "鼓楼校区" + "</h1> ";
        per.appendChild(address);

        var photo = document.createElement("div");
        photo.setAttribute("class", "photo-holder");
        photo.innerHTML = "<span class='photo-item'> <img src='images/basketball.png'> <span class='icover'></span> </span>" +
            "<span class='photo-item'> <img src='images/soccer.png'> <span class='icover'></span> </span>" +
            "<span class='photo-item'> <img src='images/tennis.png'> <span class='icover'></span> </span> ";
        per.appendChild(photo);

        var activity = document.createElement("div");
        activity.setAttribute("class", "activity-description");
        activity.innerHTML = "<p>" + "\"好雨知时节，当春乃发生\"，周末是难得的晴天，去操场打球，一起运动吧！" + "</p>";
        per.appendChild(activity);

        var comment = document.createElement("div");
        comment.setAttribute("class", "per-activity-footer");
        comment.innerHTML = "<h5 class='per-activity-footer-h5-none text-hide' >评分</h5>" +
            "<a href='activityComment.html'>评分</a>";
        per.appendChild(comment);
        all.appendChild(per);
    }
}
function start(btn){
    activeBtn(btn);
    var all = document.getElementById("all");
    var ch = all.children;
    for(var j = 3;j>=1;j--){
        all.removeChild(ch[j]);
    }
    var per = document.createElement("div");
    per.setAttribute("class", "per-activity");
    var head = document.createElement("div");
    head.setAttribute("class", "activity-head-holder");
    head.innerHTML = "<h1>操场见!</h1><h4><span>58/100</span> 人参与</h4>";
    per.appendChild(head);

    var address = document.createElement("div");
    address.setAttribute("class", "activity-time-address-holder");
    address.innerHTML = "<h1><i class='fa-fa fa-clock-o'></i>4月20日</h1>" +
        "<h1><i class='material-icons small-icon'>location_on</i>" + "鼓楼操场" + "</h1> ";
    per.appendChild(address);

    var photo = document.createElement("div");
    photo.setAttribute("class", "photo-holder");
    photo.innerHTML = "<span class='photo-item'> <img src='images/basketball.png'> <span class='icover'></span> </span>" +
        "<span class='photo-item'> <img src='images/soccer.png'> <span class='icover'></span> </span>" +
        "<span class='photo-item'> <img src='images/tennis.png'> <span class='icover'></span> </span> ";
    per.appendChild(photo);

    var activity = document.createElement("div");
    activity.setAttribute("class", "activity-description");
    activity.innerHTML = "<p>" + "\"好雨知时节，当春乃发生\"，周末是难得的晴天，去操场踢球、打球，一起运动吧！" + "</p>";
    per.appendChild(activity);

    var comment = document.createElement("div");
    comment.setAttribute("class", "per-activity-footer");
    comment.innerHTML = "<h5 class='per-activity-footer-h5-none text-hide' >评分</h5>" +
        "<a href='activityDetail.html'>评分</a>";
    per.appendChild(comment);
    all.appendChild(per);
}
function  comm() {
    var i1 = document.getElementById("i1").value;
    document.getElementById("r1").innerHTML='';
    if(i1!='')
        document.getElementById("r1").innerText=i1;
    else
        document.getElementById("r1").innerText=0;
    var i2 = document.getElementById("i2").value;
    document.getElementById("r2").innerHTML='';
    if(i2!='')
        document.getElementById("r2").innerText=i2;
    else
        document.getElementById("r2").innerText=0;
    var i3 = document.getElementById("i3").value;
    document.getElementById("r3").innerHTML='';
    if(i3!='')
        document.getElementById("r3").innerText=i3;
    else
        document.getElementById("r3").innerText=0;
    var comment = document.getElementById("comment");
    comment.style.display="none";
}
