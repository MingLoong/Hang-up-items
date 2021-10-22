var height = device.height;
var width = device.width;
console.show()
log("准备启动京东app");
get_money()
 
function get_money() {
    app.launchApp("京东");
    desc("浮层活动").waitFor();
    sleep(2000);
    log("浮层活动已找到")
    //desc("浮层活动").findOne().click();
    click(desc("浮层活动").findOne().bounds().centerX(),desc("浮层活动").findOne().bounds().centerY())
    sleep(1000);
    click(desc("浮层活动").findOne().bounds().centerX(),desc("浮层活动").findOne().bounds().centerY())
     
     
    textContains("消耗").waitFor();
    log("页面已加载，准备做任务");     
    sleep(2000);
 
    var ch = textContains("消耗").findOne();
    var parent1 =ch.parent();
    for(var i = 0; i < parent1.childCount(); i++)
    { var child = parent1.child(i);
      if(child.text().search("消耗")!=-1)
      {
         parent1.child(i+1).click();
         break;
      }
    }
     
    sleep(2000);
 
    log("开始浏览并关注8s任务");
    while(textContains("浏览并关注8s").exists()){
       var tens= textContains("浏览并关注8s").findOne();
       var parent =tens.parent()
       var text=parent.child(1).text()
       log(text)
       var num = text.match(/[0-9]+/g)
       //log(num)
       if(num[1]==num[0])
       { 
       log("浏览并关注已完成")
       break;
           }
       parent.child(3).click();
       sleep(12000);
       back();
       sleep(5000);
   }
    
   log("开始浏览8s任务");  
   while(textContains("浏览8s").exists()){
       var tens= textContains("浏览8s").findOne();
       var parent =tens.parent()
       var text=parent.child(1).text()
       log(text)
       var num = text.match(/[0-9]+/g)
       //log(num)
       if(num[1]==num[0])
       { 
       log("浏览8s已完成")
       break;
           }
       parent.child(3).click();
       sleep(12000);
       back();
       sleep(5000);
   }
    
   log("开始浏览5个的任务");
   while(textContains("浏览5个").exists()){
       var tens= textContains("浏览5个").findOne();
       var parent =tens.parent()
       var text=parent.child(1).text()
       log(text)
       var num = text.match(/[0-9]+/g)
       //log(num)
       if(num[1]==num[0])
       { 
       log("浏览5个任务已完成")
       break;
           }
       parent.child(3).click();
       textContains("当前页点击浏览5个商品领汪汪币").waitFor();
       sleep(2000);
       i=1
       while(i<6){
            
           //click(width/3,height*2/3);
           click(textContains("￥").findOnce(i-1).bounds().centerX(),textContains("￥").findOnce(i-1).bounds().centerY())
           sleep(2000);
           back();
           sleep(800);
           swipe(width / 2, height/2, width / 2, height/3, 500);
           log("已浏览第"+i+"个商品");
           i++;
           sleep(2000);
           }
       back();
       sleep(5000);
   }
 
   log("浏览5个任务已完成");
   }
