console.log('Whattaaaaaap');


simply.on('singleClick', function(e) {
  console.log(util2.format('single clicked $button!', e));
  simply.vibe();
  simply.on('accelData', function(e) {
  	simply.body(e.accel.x + '  ' + e.accel.y + '  ' e.accel.z);
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
  console.log(util2.format('tapped accel axis $axis $direction!', e));
  simply.subtitle('Tapped ' + (e.direction > 0 ? '+' : '-') + e.axis + '!');
});

simply.setText({
  title: 'Simply Demo!',
  body: 'This is a demo. Press buttons or tap the watch!',
}, true);
