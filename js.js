// Dave's message List
var data = [
    'Wabby Wabbo',
    'Wobba wabbo',
    'wadda wabbo'
  ]
  
//find Button in HTML
var sendMsgButton = document.getElementById('sendMsgButton')
//find inputArea in HTML
var inputArea = document.getElementById('inputArea')
var msgList = document.getElementById('messageList')

//send user message
function sendMsg(msg, className) {
    var li = document.createElement('li');
    li.className = className
    var childNode = document.createElement('div')
    childNode.innerText = msg
    li.appendChild(childNode)
    
    msgList.appendChild(li);
}
//send Dave's message
function sendrobotMsg() {　
    // random reply from Dave's message List
    var randomNumber = Math.floor(Math.random() * 3)
    var robotMsg = data[randomNumber]
    // send Dave's message
    sendMsg(robotMsg, 'message-list__item message-list__item-robot')
}

function setFocusLast(obj){     
    obj.focus();      
    var r = obj.createTextRange();       
    r.moveStart("character",obj.value.length);      
    r.collapse(true);      
    r.select();        
}
  // when sendMsgButton be clicked
sendMsgButton.addEventListener('click', function() {
    // get user message
    var userMsg = inputArea.value;
    //only if user typed some text
    if (userMsg != "") {
        // clean inputArea
        inputArea.value = ''
        // send user message
        sendMsg(userMsg, 'message-list__item message-list__item-user')
        meter = setTimeout("sendrobotMsg()", 500)
        setFocusLast()
    }
})
  