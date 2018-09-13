let _runBtn=document.getElementById('runBtn');
let _input=document.getElementById('input');
let _output=document.getElementById('output');
let _inputVal='';
let _inputArr=[];
let _line=0;
_runBtn.onclick=function () {
    _inputVal=_input.value;
    _inputArr=_inputVal.split('\n');
    _line=0;
    if(_inputVal!=null && _inputVal!=''){
        localStorage.setItem('_inputVal',_inputVal);
    }
    clearScript();
    let _script=document.createElement('script');
    _script.type='text/javascript';
    _script.id='main';
    _script.src='./index.js';
    document.body.appendChild(_script);
}
function readline(){
    return _inputArr[_line++];
}
function read_line(){
    return _inputArr[_line++];
}
function print(_val){
    _output.value=_val;
}
let _resetBtn=document.getElementById('reset');
_resetBtn.onclick=function () {
    _input.value="";
    _output.value="";
}
function clearScript(){
    let _script=document.getElementById('main');
    document.body.removeChild(_script);
}
let _restartBtn=document.getElementById('restart');
_restartBtn.onclick=function () {
    _inputVal=localStorage.getItem('_inputVal');
    _input.value=_inputVal;
    _runBtn.onclick();
}
let _refreshBtn=document.getElementById('refresh');
_refreshBtn.onclick=function () {
    location.reload();
}