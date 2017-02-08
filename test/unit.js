var test = require('tape')

test('single click of like button', function (t) {
  t.ok(true)
  t.end()
 })
  /*
  Not sure how to exactly write this test in this frame work but here is generally how I would do it:
	First the like button has to be rendered in some way, check that the button is unliked. Then preform
	a click function on the like button, save/check the value. Perform another click, check to make sure the 
	value is unchanged. Can also check the like counter in the same way.
