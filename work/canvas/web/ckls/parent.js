var childProcess = require('child_process');

var child = childProcess.fork('./child.js');
child.on('message', function(msg) { // 处理child线程发送过来的消息
    if (typeof msg != 'object' || !msg.hasOwnProperty('cmd')) {
        console.log('[Parent] Invalid message! ' + JSON.stringify(msg));
        return;
    }
    switch (msg.cmd) {
        case 'childSay':
            console.log('child say: ' + msg.data.chat);
            break;
        default:
            console.log('[Parent] Invalid message command! ' + JSON.stringify(msg));
            break;
    }
});
child.send({cmd: 'parentSay', data: {chat: 'This is parent!'}}); // 向child线程发送消息