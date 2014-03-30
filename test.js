console.log('Whattaaaaaap');


simply.on('singleClick', function(e) {
  console.log(util2.format('single clicked $button!', e));
  simply.subtitle('Version: 2A');
  simply.vibe();
  
  simply.subtitle('Pressed ' + e.button + '!');
});


simply.on('longClick', function(e) {
  console.log(util2.format('long clicked $button!', e));
  simply.vibe();
  simply.scrollable(e.button !== 'select');
});

simply.on('accelData', function(e) {
  simply.body(e.accel.x + "  " + e.accel.y);
  simply.subtitle('Version: 2B');

  /*
  	if (e.accel.x > 200 && e.accel.y > 200)
  	{
  	  simply.subtitle('It is positive');
  	}*/
  	
});

simply.setText({
  title: 'Simply Demo!',
  body: 'This is a demo. Press buttons or tap the watch!',
}, true);
