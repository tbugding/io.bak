process.on('message', function(msg) { // 处理parent线程发送过来的消息
    if (typeof msg != 'object' || !msg.hasOwnProperty('cmd')) {
        console.log('[Child] Invalid message! ' + JSON.stringify(msg));
        return;
    }
    switch (msg.cmd) {
        case 'parentSay':
            console.log('parent say: ' + msg.data.chat);
            process.send({}); // invalid message
            process.send({cmd: 'invalid'}); // invalid command
            process.send({cmd: 'childSay', data: {chat: 'This is child!'}}); // 向parent线程发送消息
            process.exit(0);
            break;
        default:
            console.log('[Child] Invalid message command! ' + JSON.stringify(msg));
            break;
    }
});