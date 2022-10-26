var func = function(){
    
  //選取輸入欄位的 DOM 並宣告變數名，用 value 帶出輸入欄的值。
  var a = parseInt(document.getElementById('text1').value);
  var b = parseInt(document.getElementById('text2').value);
  //再用一個變數儲存金額加總
  var total = a +b;
  //把總金額渲染至網頁上
  document.getElementById('answer').textContent = total;
}

// 切換頁面
function PVD() { 
  document.getElementById('page').action = '/index';
  document.getElementById('page').submit();
}

// 切換頁面
function PM() {
  document.getElementById('page').action = '/PM_Follow';
  document.getElementById('page').submit();
}

// 取得日期
function GetDSDate() {
  var now = new Date();
  var day = ("0" + now.getDate()).slice(-2);  //格式化日，如果小於9，前面補0
  var month = ("0" + (now.getMonth() + 1)).slice(-2);  //格式化月，如果小於9，前面補0
  var today = now.getFullYear()+"-"+(month)+"-"+(day) ;  //拼裝完整日期格式
  document.getElementById('date').value = (today);
} 

// 取得日期
function GetNSDate() {
  var now = new Date();
  if ( now.getHours <= 8 && now.getMinutes <= 30 ) {
    var day = ("0" + now.getDate()).slice(-2) - 1;  //格式化日，如果小於9，前面補0
    var month = ("0" + (now.getMonth() + 1)).slice(-2);  //格式化月，如果小於9，前面補0
    var today = now.getFullYear()+"-"+(month)+"-"+(day) ;  //拼裝完整日期格式
  } // if
  else {
    var day = ("0" + now.getDate()).slice(-2) ;  //格式化日，如果小於9，前面補0
    var month = ("0" + (now.getMonth() + 1)).slice(-2);  //格式化月，如果小於9，前面補0
    var today = now.getFullYear()+"-"+(month)+"-"+(day) ;  //拼裝完整日期格式
  } // else
  
  document.getElementById('date').value = (today);
} 
