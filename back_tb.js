var height = device.height;
var width = device.width;
console.show();
log("\n设备宽" + width + "\n" + "设备高" + height + "\n" + "手机型号" + device.model + "\n安卓版本" + device.release);
log("准备启动淘宝app");
get_cat_b();
 
function get_cat_b() {
    app.launchApp("淘宝");
    text("领淘金币").waitFor();
    log("淘宝页面已加载");
    var y = text("领淘金币").findOne().bounds().bottom;
    click(width*2/3,y+100);
    text("扫一扫").waitFor();
    log("准备做任务");
    text("赚糖领红包").findOne().click();
    sleep(1500);
    while (text("去浏览").exists()) {
        text("去浏览").findOne().click();
        allwc();
        sleep(300);
        back();
        sleep(1500);
    }
    log("任务结束");
}
 
function allwc()
{
    var i = 1;
    while(i){
     
    sleep(1000);
    if(textContains("已发放").exists())
            i=0;
    else if(descContains("已发放").exists())
            i=0;
    else if(idContains("taolive").exists())
        {i= 0;
        log("直播，直接返回");}
    }
}
