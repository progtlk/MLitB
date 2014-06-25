io = io.connect();

io.emit('monitor');

var log_list = [];

var t = 0;

var logger = function(text) {

  log_list.push(text);
  log_list = log_list.slice(-100, 200);

  text = "";

  var i = log_list.length;
  while(i--) {
    text += t.toString() + ' : ';
    text += log_list[i];
    text += '\n';
  }

  t++;

  $('pre#log').html(text);

}

var displayParameter = function(data) {
	logger(JSON.stringify(data));
}

var monitor = function(e) {

    if(e.type == 'parameter') {
        displayParameter(e.data);
    }
}

io.on('monitor', monitor);