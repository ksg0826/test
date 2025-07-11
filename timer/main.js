let _timer = 10;
let _stateTimer = 0;

App.onUpdate.Add(function(dt){
	_stateTimer += dt;
	
	if(_stateTimer >= 1){
		_stateTimer = 0;
		_timer -= 1;
	}

	
	if(_timer <= 0){
		App.showCenterLabel("시간 ㄲㅡㅌ");
			// time over then...
	}
})