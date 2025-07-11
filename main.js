//test
// main.js

App.showCenterLabel("Hello world");

//UI가 노출될 위치(정렬, 가로, 세로) 값을 변수로 사전에 제작
let postion = 'middle';
let width = 600;
let height = 600;

// my.html로 state라는 태그를 만들어 hello라는 값을 전달
let _widget = App.showWidget('my.html', position, width, height);
_widget.sendMessage({
	state: "hello guys",
}); 

