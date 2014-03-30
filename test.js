console.log('Whattaaaaaap');


simply.on('singleClick', function(e) {
  console.log(util2.format('single clicked $button!', e));
  simply.subtitle('Version: '+ 1);
  simply.vibe();
  simply.on('accelData', function(e) {
  	simply.body(e.accel.x + "  " + e.accel.y);
  	console.log(typeof e.accel.x);
  	/*
  	if (e.accel.x > 200 && e.accel.y > 200)
  	{
  	  simply.subtitle('It is positive');
  	}*/
  	
  	//simply.subtitle('Tapped' + e.axis);
  	if (e.axis === 'y')
  	{
  		simply.subtitle('Success!!');
  	}
  })
  simply.subtitle('Pressed ' + e.button + '!');
});


simply.on('longClick', function(e) {
  console.log(util2.format('long clicked $button!', e));
  simply.vibe();
  simply.scrollable(e.button !== 'select');
});

simply.on('accelTap', function(e) {
  simply.body(e.accel.x + "  " + e.accel.y);
  	/*
  	if (e.accel.x > 200 || e.accel.y > 200)
  	{
  	  simply.subtitle('It is positive');
  	}*/
  	
});

simply.setText({
  title: 'Simply Demo!',
  body: 'This is a demo. Press buttons or tap the watch!',
}, true);
