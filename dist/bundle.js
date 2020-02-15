!function(t){var e={};function i(n){if(e[n])return e[n].exports;var s=e[n]={i:n,l:!1,exports:{}};return t[n].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=e,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="",i(i.s=0)}([function(t,e,i){"use strict";i.r(e);class n{static getObjectWithName(t){return document.getElementById(t)}static switchVisibility(t,e){"none"==t.style.display?(t.style.display="block",e.style.display="none"):(e.style.display="block",t.style.display="none")}}class s{static initialize(){null==this.startContainer&&(this.startContainer=n.getObjectWithName("start-container"),null==this.gameContainer&&(this.gameContainer=n.getObjectWithName("game-container"),null==this.gameCanvas&&(this.gameCanvas=n.getObjectWithName("game-canvas"),null==this.gameCanvasContext&&(this.gameCanvasContext=this.gameCanvas.getContext("2d"),null==this.startButton&&(this.startButton=n.getObjectWithName("start-button"),null==this.stopButton&&(this.stopButton=n.getObjectWithName("stop-button")))))))}}s.startContainer=null,s.gameContainer=null,s.gameCanvas=null,s.gameCanvasContext=null,s.startButton=null,s.stopButton=null;class a{}a.wDown=!1,a.aDown=!1,a.sDown=!1,a.dDown=!1;class o{constructor(t,e){this.w=t,this.h=e}}class l{}l.height=15,l.width=7,l.xPos=2,l.yPos=2,l.speed=.8,l.color="rgb(32,103,79)";class r{}r.loopsPerSecond=120,r.enableDebugInfo=!0;class c{static initialize(){this.isInitialized||(this.isInitialized=!0,setInterval(()=>{if(!this.doGameCycle)return;let t=this.windowRect();s.gameCanvasContext.clearRect(0,0,t.w,t.h),this.printDebugInfo(),s.gameCanvasContext.fillStyle=this.entity.color,s.gameCanvasContext.fillRect(this.entity.xPos,this.entity.yPos,this.entity.width,this.entity.height),this.animateColor(),this.updatePositions(),this.validatePositions()},1e3/r.loopsPerSecond).toFixed())}static printDebugInfo(){r.enableDebugInfo&&(s.gameCanvasContext.fillStyle="#4182ef",s.gameCanvasContext.font="14px Segoe UI",s.gameCanvasContext.fillText(`Position (${this.entity.xPos}, ${this.entity.yPos})`,20,20),s.gameCanvasContext.fillText(`Entity sizes (${this.entity.width}, ${this.entity.height})`,20,40),s.gameCanvasContext.fillText(`Loops per second ${r.loopsPerSecond}`,20,60))}static updatePositions(){a.wDown&&(this.entity.yPos+=this.entity.speed),a.aDown&&(this.entity.xPos-=this.entity.speed),a.sDown&&(this.entity.yPos-=this.entity.speed),a.dDown&&(this.entity.xPos+=this.entity.speed)}static validatePositions(){this.entity.xPos<0&&(this.entity.xPos=window.innerWidth-2),this.entity.xPos-1>window.innerWidth&&(this.entity.xPos=0),this.entity.yPos+1<0&&(this.entity.yPos=s.gameCanvas.height-this.entity.height),this.entity.yPos-1>s.gameCanvas.height&&(this.entity.yPos=0)}static animateColor(){a.wDown?this.entity.color="#5c673c":a.aDown?this.entity.color="#674f38":a.sDown?this.entity.color="#673133":a.dDown?this.entity.color="#673a5f":this.entity.color="#20674f"}static windowRect(){return new o(window.innerWidth,window.innerHeight)}}c.isInitialized=!1,c.doGameCycle=!0,c.entity=l;class h{static initialize(){this.isInitialized||(this.isInitialized=!0,this.subscribe())}static subscribe(){s.startButton.onclick=()=>this.startGameLoop(),s.stopButton.onclick=()=>this.stopGameLoop()}static startGameLoop(){this.arrangeCanvasSize(),this.switchGameState(),c.doGameCycle=!0,c.initialize()}static stopGameLoop(){c.doGameCycle=!1,this.switchGameState()}static arrangeCanvasSize(){s.gameCanvas.width=window.innerWidth,s.gameCanvas.height=window.innerHeight*this.canvasHeightPercent}static switchGameState(){n.switchVisibility(n.getObjectWithName("start-container"),n.getObjectWithName("game-container"))}}h.canvasHeightPercent=.7,h.isInitialized=!1,window.onload=()=>{s.initialize(),h.initialize(),class{static initialize(){window.onkeydown=this.handleDown,window.onkeyup=this.handleUp}static handleDown(t){"KeyW"==t.code&&(a.wDown=!0),"KeyA"==t.code&&(a.aDown=!0),"KeyS"==t.code&&(a.sDown=!0),"KeyD"==t.code&&(a.dDown=!0)}static handleUp(t){"KeyW"==t.code&&(a.wDown=!1),"KeyA"==t.code&&(a.aDown=!1),"KeyS"==t.code&&(a.sDown=!1),"KeyD"==t.code&&(a.dDown=!1)}}.initialize()},window.onresize=()=>h.arrangeCanvasSize()}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2h0bWxUcmVlVXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVVaUVsZW1lbnRzLnRzIiwid2VicGFjazovLy8uL3NyYy9rZXlTdGF0ZXNTdG9yZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvd2luZG93UmVjdC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvZW50aXR5LnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lU2V0dGluZ3MudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dhbWVJbXBsLnRzIiwid2VicGFjazovLy8uL3NyYy91aUV2ZW50SGFuZGxlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2tleWJvYXJkSGFuZGxlci50cyJdLCJuYW1lcyI6WyJpbnN0YWxsZWRNb2R1bGVzIiwiX193ZWJwYWNrX3JlcXVpcmVfXyIsIm1vZHVsZUlkIiwiZXhwb3J0cyIsIm1vZHVsZSIsImkiLCJsIiwibW9kdWxlcyIsImNhbGwiLCJtIiwiYyIsImQiLCJuYW1lIiwiZ2V0dGVyIiwibyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiZW51bWVyYWJsZSIsImdldCIsInIiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsInZhbHVlIiwidCIsIm1vZGUiLCJfX2VzTW9kdWxlIiwibnMiLCJjcmVhdGUiLCJrZXkiLCJiaW5kIiwibiIsIm9iamVjdCIsInByb3BlcnR5IiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJwIiwicyIsIkh0bWxUcmVlVXRpbHMiLCJpZCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJvYmoxIiwib2JqMiIsInN0eWxlIiwiZGlzcGxheSIsInRoaXMiLCJzdGFydENvbnRhaW5lciIsImdldE9iamVjdFdpdGhOYW1lIiwiZ2FtZUNvbnRhaW5lciIsImdhbWVDYW52YXMiLCJnYW1lQ2FudmFzQ29udGV4dCIsImdldENvbnRleHQiLCJzdGFydEJ1dHRvbiIsInN0b3BCdXR0b24iLCJLZXlTdGF0ZXNTdG9yZSIsIndEb3duIiwiYURvd24iLCJzRG93biIsImREb3duIiwiV2luZG93UmVjdCIsInciLCJoIiwiRW50aXR5IiwiaGVpZ2h0Iiwid2lkdGgiLCJ4UG9zIiwieVBvcyIsInNwZWVkIiwiY29sb3IiLCJHYW1lU2V0dGluZ3MiLCJsb29wc1BlclNlY29uZCIsImVuYWJsZURlYnVnSW5mbyIsImlzSW5pdGlhbGl6ZWQiLCJzZXRJbnRlcnZhbCIsImRvR2FtZUN5Y2xlIiwid1JlY3QiLCJ3aW5kb3dSZWN0IiwiY2xlYXJSZWN0IiwicHJpbnREZWJ1Z0luZm8iLCJmaWxsU3R5bGUiLCJlbnRpdHkiLCJmaWxsUmVjdCIsImFuaW1hdGVDb2xvciIsInVwZGF0ZVBvc2l0aW9ucyIsInZhbGlkYXRlUG9zaXRpb25zIiwidG9GaXhlZCIsImZvbnQiLCJmaWxsVGV4dCIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInN1YnNjcmliZSIsIm9uY2xpY2siLCJzdGFydEdhbWVMb29wIiwic3RvcEdhbWVMb29wIiwiYXJyYW5nZUNhbnZhc1NpemUiLCJzd2l0Y2hHYW1lU3RhdGUiLCJpbml0aWFsaXplIiwiY2FudmFzSGVpZ2h0UGVyY2VudCIsInN3aXRjaFZpc2liaWxpdHkiLCJvbmxvYWQiLCJvbmtleWRvd24iLCJoYW5kbGVEb3duIiwib25rZXl1cCIsImhhbmRsZVVwIiwiZXZlbnQiLCJjb2RlIiwib25yZXNpemUiXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJFLEdBQVVDLFFBR25DLElBQUlDLEVBQVNKLEVBQWlCRSxHQUFZLENBQ3pDRyxFQUFHSCxFQUNISSxHQUFHLEVBQ0hILFFBQVMsSUFVVixPQU5BSSxFQUFRTCxHQUFVTSxLQUFLSixFQUFPRCxRQUFTQyxFQUFRQSxFQUFPRCxRQUFT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RCxrQkFDTCxFQUFTdEIsYUFBYyxFQUN2QixFQUFTdUIsYUFHTCxzQkFDSixFQUFTdkIsYUFBYyxFQUN2QjdCLEtBQUttRCxrQkFHVCwyQkFDSSxFQUFlL0MsV0FBV2UsTUFBUXdCLE9BQU9DLFdBQ3pDLEVBQWV4QyxXQUFXYyxPQUFTeUIsT0FBT0UsWUFBYzdDLEtBQUtxRCxvQkFHekQseUJBQ0o3RCxFQUFjOEQsaUJBQ1Y5RCxFQUFjVSxrQkFBa0IsbUJBQ2hDVixFQUFjVSxrQkFBa0Isb0JBbkNqQyxFQUFBbUQsb0JBQXNCLEdBQ2QsRUFBQTFCLGVBQWdCLEVDRm5DZ0IsT0FBT1ksT0FBUyxLQUNaLEVBQWVILGFBQ2YsRUFBZUEsYUNKWixNQUNILG9CQUNJVCxPQUFPYSxVQUFZeEQsS0FBS3lELFdBQ3hCZCxPQUFPZSxRQUFVMUQsS0FBSzJELFNBR2xCLGtCQUFrQkMsR0FDSixRQUFkQSxFQUFNQyxPQUNOcEQsRUFBZUMsT0FBUSxHQUVULFFBQWRrRCxFQUFNQyxPQUNOcEQsRUFBZUUsT0FBUSxHQUVULFFBQWRpRCxFQUFNQyxPQUNOcEQsRUFBZUcsT0FBUSxHQUVULFFBQWRnRCxFQUFNQyxPQUNOcEQsRUFBZUksT0FBUSxHQUl2QixnQkFBZ0IrQyxHQUNGLFFBQWRBLEVBQU1DLE9BQ05wRCxFQUFlQyxPQUFRLEdBRVQsUUFBZGtELEVBQU1DLE9BQ05wRCxFQUFlRSxPQUFRLEdBRVQsUUFBZGlELEVBQU1DLE9BQ05wRCxFQUFlRyxPQUFRLEdBRVQsUUFBZGdELEVBQU1DLE9BQ05wRCxFQUFlSSxPQUFRLEtEM0JmdUMsY0FHcEJULE9BQU9tQixTQUFXLElBQU0sRUFBZVoiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGNsYXNzIEh0bWxUcmVlVXRpbHMge1xyXG4gICAgc3RhdGljIGdldE9iamVjdFdpdGhOYW1lKGlkOiBzdHJpbmcpOiBIVE1MRWxlbWVudCB7XHJcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIFN3aXRjaCB2aXNpYmlsaXR5IGJldHdlZW4gdHdvIG9iamVjdHMuXHJcbiAgICAgKi9cclxuICAgIHN0YXRpYyBzd2l0Y2hWaXNpYmlsaXR5KG9iajE6IEhUTUxFbGVtZW50LCBvYmoyOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgICAgIGlmIChvYmoxLnN0eWxlLmRpc3BsYXkgPT0gXCJub25lXCIpIHtcclxuICAgICAgICAgICAgb2JqMS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xyXG4gICAgICAgICAgICBvYmoyLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBvYmoyLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XHJcbiAgICAgICAgICAgIG9iajEuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSIsImltcG9ydCB7SHRtbFRyZWVVdGlsc30gZnJvbSBcIi4vaHRtbFRyZWVVdGlsc1wiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEdhbWVVaUVsZW1lbnRzIHtcclxuICAgIHN0YXRpYyBzdGFydENvbnRhaW5lcjogSFRNTEVsZW1lbnQgPSBudWxsO1xyXG4gICAgc3RhdGljIGdhbWVDb250YWluZXI6IEhUTUxFbGVtZW50ID0gbnVsbDtcclxuICAgIHN0YXRpYyBnYW1lQ2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudCA9IG51bGw7XHJcbiAgICBzdGF0aWMgZ2FtZUNhbnZhc0NvbnRleHQ6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRCA9IG51bGw7XHJcbiAgICBzdGF0aWMgc3RhcnRCdXR0b246IEhUTUxCdXR0b25FbGVtZW50ID0gbnVsbDtcclxuICAgIHN0YXRpYyBzdG9wQnV0dG9uOiBIVE1MQnV0dG9uRWxlbWVudCA9IG51bGw7XHJcblxyXG4gICAgc3RhdGljIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRDb250YWluZXIgIT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3RhcnRDb250YWluZXIgPSBIdG1sVHJlZVV0aWxzLmdldE9iamVjdFdpdGhOYW1lKFwic3RhcnQtY29udGFpbmVyXCIpO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5nYW1lQ29udGFpbmVyICE9IG51bGwpIHJldHVybjtcclxuICAgICAgICB0aGlzLmdhbWVDb250YWluZXIgPSBIdG1sVHJlZVV0aWxzLmdldE9iamVjdFdpdGhOYW1lKFwiZ2FtZS1jb250YWluZXJcIik7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdhbWVDYW52YXMgIT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuZ2FtZUNhbnZhcyA9IEh0bWxUcmVlVXRpbHMuZ2V0T2JqZWN0V2l0aE5hbWUoXHJcbiAgICAgICAgICAgIFwiZ2FtZS1jYW52YXNcIlxyXG4gICAgICAgICkgYXMgSFRNTENhbnZhc0VsZW1lbnQ7XHJcblxyXG4gICAgICAgIGlmICh0aGlzLmdhbWVDYW52YXNDb250ZXh0ICE9IG51bGwpIHJldHVybjtcclxuICAgICAgICB0aGlzLmdhbWVDYW52YXNDb250ZXh0ID0gdGhpcy5nYW1lQ2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RhcnRCdXR0b24gIT0gbnVsbCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuc3RhcnRCdXR0b24gPSBIdG1sVHJlZVV0aWxzLmdldE9iamVjdFdpdGhOYW1lKFxyXG4gICAgICAgICAgICBcInN0YXJ0LWJ1dHRvblwiXHJcbiAgICAgICAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuXHJcbiAgICAgICAgaWYgKHRoaXMuc3RvcEJ1dHRvbiAhPSBudWxsKSByZXR1cm47XHJcbiAgICAgICAgdGhpcy5zdG9wQnV0dG9uID0gSHRtbFRyZWVVdGlscy5nZXRPYmplY3RXaXRoTmFtZShcclxuICAgICAgICAgICAgXCJzdG9wLWJ1dHRvblwiXHJcbiAgICAgICAgKSBhcyBIVE1MQnV0dG9uRWxlbWVudDtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBLZXlTdGF0ZXNTdG9yZSB7XHJcbiAgICBzdGF0aWMgd0Rvd24gPSBmYWxzZTtcclxuICAgIHN0YXRpYyBhRG93biA9IGZhbHNlO1xyXG4gICAgc3RhdGljIHNEb3duID0gZmFsc2U7XHJcbiAgICBzdGF0aWMgZERvd24gPSBmYWxzZTtcclxufSIsImV4cG9ydCBjbGFzcyBXaW5kb3dSZWN0IHtcclxuICAgIHc6IG51bWJlcjtcclxuICAgIGg6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih3OiBudW1iZXIsIGg6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMudyA9IHc7XHJcbiAgICAgICAgdGhpcy5oID0gaDtcclxuICAgIH1cclxufSIsImV4cG9ydCBjbGFzcyBFbnRpdHkge1xyXG4gICAgc3RhdGljIGhlaWdodCA9IDE1O1xyXG4gICAgc3RhdGljIHdpZHRoID0gNztcclxuICAgIHN0YXRpYyB4UG9zOiBudW1iZXIgPSAyLjA7XHJcbiAgICBzdGF0aWMgeVBvczogbnVtYmVyID0gMi4wO1xyXG4gICAgc3RhdGljIHNwZWVkOiBudW1iZXIgPSAwLjg7XHJcbiAgICBzdGF0aWMgY29sb3I6IHN0cmluZyA9IFwicmdiKDMyLDEwMyw3OSlcIjtcclxufSIsImV4cG9ydCBjbGFzcyBHYW1lU2V0dGluZ3Mge1xyXG4gICAgc3RhdGljIGxvb3BzUGVyU2Vjb25kID0gMTIwO1xyXG4gICAgc3RhdGljIGVuYWJsZURlYnVnSW5mbyA9IHRydWU7XHJcbn0iLCJpbXBvcnQge0dhbWVVaUVsZW1lbnRzfSBmcm9tIFwiLi9nYW1lVWlFbGVtZW50c1wiO1xyXG5pbXBvcnQge0tleVN0YXRlc1N0b3JlfSBmcm9tIFwiLi9rZXlTdGF0ZXNTdG9yZVwiO1xyXG5pbXBvcnQge1dpbmRvd1JlY3R9IGZyb20gXCIuL3dpbmRvd1JlY3RcIjtcclxuaW1wb3J0IHtFbnRpdHl9IGZyb20gXCIuL2VudGl0eVwiO1xyXG5pbXBvcnQge0dhbWVTZXR0aW5nc30gZnJvbSBcIi4vZ2FtZVNldHRpbmdzXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgR2FtZUltcGwge1xyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaXNJbml0aWFsaXplZCA9IGZhbHNlO1xyXG4gICAgc3RhdGljIGRvR2FtZUN5Y2xlID0gdHJ1ZTtcclxuICAgIHN0YXRpYyBlbnRpdHkgPSBFbnRpdHk7XHJcblxyXG4gICAgc3RhdGljIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNJbml0aWFsaXplZCkgcmV0dXJuO1xyXG4gICAgICAgIHRoaXMuaXNJbml0aWFsaXplZCA9IHRydWU7XHJcblxyXG4gICAgICAgIHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmRvR2FtZUN5Y2xlKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICBsZXQgd1JlY3QgPSB0aGlzLndpbmRvd1JlY3QoKTtcclxuICAgICAgICAgICAgR2FtZVVpRWxlbWVudHMuZ2FtZUNhbnZhc0NvbnRleHQuY2xlYXJSZWN0KFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgd1JlY3Qudywgd1JlY3QuaFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLnByaW50RGVidWdJbmZvKCk7XHJcbiAgICAgICAgICAgIEdhbWVVaUVsZW1lbnRzLmdhbWVDYW52YXNDb250ZXh0LmZpbGxTdHlsZSA9IHRoaXMuZW50aXR5LmNvbG9yO1xyXG4gICAgICAgICAgICBHYW1lVWlFbGVtZW50cy5nYW1lQ2FudmFzQ29udGV4dC5maWxsUmVjdChcclxuICAgICAgICAgICAgICAgIHRoaXMuZW50aXR5LnhQb3MsIHRoaXMuZW50aXR5LnlQb3MsXHJcbiAgICAgICAgICAgICAgICB0aGlzLmVudGl0eS53aWR0aCwgdGhpcy5lbnRpdHkuaGVpZ2h0XHJcbiAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGVDb2xvcigpO1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVBvc2l0aW9ucygpO1xyXG4gICAgICAgICAgICB0aGlzLnZhbGlkYXRlUG9zaXRpb25zKCk7XHJcbiAgICAgICAgfSwgMTAwMCAvIEdhbWVTZXR0aW5ncy5sb29wc1BlclNlY29uZCkudG9GaXhlZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHByaW50RGVidWdJbmZvKCkge1xyXG4gICAgICAgIGlmICghR2FtZVNldHRpbmdzLmVuYWJsZURlYnVnSW5mbykgcmV0dXJuO1xyXG5cclxuICAgICAgICBHYW1lVWlFbGVtZW50cy5nYW1lQ2FudmFzQ29udGV4dC5maWxsU3R5bGUgPSBcIiM0MTgyZWZcIjtcclxuICAgICAgICBHYW1lVWlFbGVtZW50cy5nYW1lQ2FudmFzQ29udGV4dC5mb250ID0gXCIxNHB4IFNlZ29lIFVJXCI7XHJcbiAgICAgICAgR2FtZVVpRWxlbWVudHMuZ2FtZUNhbnZhc0NvbnRleHQuZmlsbFRleHQoXHJcbiAgICAgICAgICAgIGBQb3NpdGlvbiAoJHt0aGlzLmVudGl0eS54UG9zfSwgJHt0aGlzLmVudGl0eS55UG9zfSlgLFxyXG4gICAgICAgICAgICAyMCwgMjBcclxuICAgICAgICApO1xyXG4gICAgICAgIEdhbWVVaUVsZW1lbnRzLmdhbWVDYW52YXNDb250ZXh0LmZpbGxUZXh0KFxyXG4gICAgICAgICAgICBgRW50aXR5IHNpemVzICgke3RoaXMuZW50aXR5LndpZHRofSwgJHt0aGlzLmVudGl0eS5oZWlnaHR9KWAsXHJcbiAgICAgICAgICAgIDIwLCA0MFxyXG4gICAgICAgICk7XHJcbiAgICAgICAgR2FtZVVpRWxlbWVudHMuZ2FtZUNhbnZhc0NvbnRleHQuZmlsbFRleHQoXHJcbiAgICAgICAgICAgIGBMb29wcyBwZXIgc2Vjb25kICR7R2FtZVNldHRpbmdzLmxvb3BzUGVyU2Vjb25kfWAsXHJcbiAgICAgICAgICAgIDIwLCA2MFxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgdXBkYXRlUG9zaXRpb25zKCkge1xyXG4gICAgICAgIGlmIChLZXlTdGF0ZXNTdG9yZS53RG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmVudGl0eS55UG9zICs9IHRoaXMuZW50aXR5LnNwZWVkO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoS2V5U3RhdGVzU3RvcmUuYURvd24pIHtcclxuICAgICAgICAgICAgdGhpcy5lbnRpdHkueFBvcyAtPSB0aGlzLmVudGl0eS5zcGVlZDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEtleVN0YXRlc1N0b3JlLnNEb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW50aXR5LnlQb3MgLT0gdGhpcy5lbnRpdHkuc3BlZWQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChLZXlTdGF0ZXNTdG9yZS5kRG93bikge1xyXG4gICAgICAgICAgICB0aGlzLmVudGl0eS54UG9zICs9IHRoaXMuZW50aXR5LnNwZWVkO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyB2YWxpZGF0ZVBvc2l0aW9ucygpIHtcclxuICAgICAgICBpZiAodGhpcy5lbnRpdHkueFBvcyA8IDAuMCkge1xyXG4gICAgICAgICAgICB0aGlzLmVudGl0eS54UG9zID0gd2luZG93LmlubmVyV2lkdGggLSAyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5lbnRpdHkueFBvcyAtIDEgPiB3aW5kb3cuaW5uZXJXaWR0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmVudGl0eS54UG9zID0gMC4wO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuZW50aXR5LnlQb3MgKyAxIDwgMCkge1xyXG4gICAgICAgICAgICB0aGlzLmVudGl0eS55UG9zID0gR2FtZVVpRWxlbWVudHMuZ2FtZUNhbnZhcy5oZWlnaHQgLSB0aGlzLmVudGl0eS5oZWlnaHQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLmVudGl0eS55UG9zIC0gMSA+IEdhbWVVaUVsZW1lbnRzLmdhbWVDYW52YXMuaGVpZ2h0KSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW50aXR5LnlQb3MgPSAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBhbmltYXRlQ29sb3IoKSB7XHJcbiAgICAgICAgaWYgKEtleVN0YXRlc1N0b3JlLndEb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW50aXR5LmNvbG9yID0gXCIjNWM2NzNjXCI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEtleVN0YXRlc1N0b3JlLmFEb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW50aXR5LmNvbG9yID0gXCIjNjc0ZjM4XCI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEtleVN0YXRlc1N0b3JlLnNEb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW50aXR5LmNvbG9yID0gXCIjNjczMTMzXCI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKEtleVN0YXRlc1N0b3JlLmREb3duKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW50aXR5LmNvbG9yID0gXCIjNjczYTVmXCI7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuZW50aXR5LmNvbG9yID0gXCIjMjA2NzRmXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgd2luZG93UmVjdCgpOiBXaW5kb3dSZWN0IHtcclxuICAgICAgICByZXR1cm4gbmV3IFdpbmRvd1JlY3QoXHJcbiAgICAgICAgICAgIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHRcclxuICAgICAgICApXHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtHYW1lVWlFbGVtZW50c30gZnJvbSBcIi4vZ2FtZVVpRWxlbWVudHNcIjtcclxuaW1wb3J0IHtIdG1sVHJlZVV0aWxzfSBmcm9tIFwiLi9odG1sVHJlZVV0aWxzXCI7XHJcbmltcG9ydCB7R2FtZUltcGx9IGZyb20gXCIuL2dhbWVJbXBsXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgVWlFdmVudEhhbmRsZXIge1xyXG4gICAgc3RhdGljIGNhbnZhc0hlaWdodFBlcmNlbnQgPSAwLjc7XHJcbiAgICBwcml2YXRlIHN0YXRpYyBpc0luaXRpYWxpemVkID0gZmFsc2U7XHJcblxyXG4gICAgc3RhdGljIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLmlzSW5pdGlhbGl6ZWQpIHtcclxuICAgICAgICAgICAgdGhpcy5pc0luaXRpYWxpemVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zdWJzY3JpYmUoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc3Vic2NyaWJlKCkge1xyXG4gICAgICAgIEdhbWVVaUVsZW1lbnRzLnN0YXJ0QnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLnN0YXJ0R2FtZUxvb3AoKTtcclxuICAgICAgICBHYW1lVWlFbGVtZW50cy5zdG9wQnV0dG9uLm9uY2xpY2sgPSAoKSA9PiB0aGlzLnN0b3BHYW1lTG9vcCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIHN0YXJ0R2FtZUxvb3AoKSB7XHJcbiAgICAgICAgdGhpcy5hcnJhbmdlQ2FudmFzU2l6ZSgpO1xyXG4gICAgICAgIHRoaXMuc3dpdGNoR2FtZVN0YXRlKCk7XHJcbiAgICAgICAgR2FtZUltcGwuZG9HYW1lQ3ljbGUgPSB0cnVlO1xyXG4gICAgICAgIEdhbWVJbXBsLmluaXRpYWxpemUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBzdG9wR2FtZUxvb3AoKSB7XHJcbiAgICAgICAgR2FtZUltcGwuZG9HYW1lQ3ljbGUgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLnN3aXRjaEdhbWVTdGF0ZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHN0YXRpYyBhcnJhbmdlQ2FudmFzU2l6ZSgpIHtcclxuICAgICAgICBHYW1lVWlFbGVtZW50cy5nYW1lQ2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XHJcbiAgICAgICAgR2FtZVVpRWxlbWVudHMuZ2FtZUNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiB0aGlzLmNhbnZhc0hlaWdodFBlcmNlbnQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgc3dpdGNoR2FtZVN0YXRlKCkge1xyXG4gICAgICAgIEh0bWxUcmVlVXRpbHMuc3dpdGNoVmlzaWJpbGl0eShcclxuICAgICAgICAgICAgSHRtbFRyZWVVdGlscy5nZXRPYmplY3RXaXRoTmFtZShcInN0YXJ0LWNvbnRhaW5lclwiKSxcclxuICAgICAgICAgICAgSHRtbFRyZWVVdGlscy5nZXRPYmplY3RXaXRoTmFtZShcImdhbWUtY29udGFpbmVyXCIpXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxufSIsImltcG9ydCB7R2FtZVVpRWxlbWVudHN9IGZyb20gXCIuL2dhbWVVaUVsZW1lbnRzXCI7XHJcbmltcG9ydCB7S2V5Ym9hcmRIYW5kbGVyfSBmcm9tIFwiLi9rZXlib2FyZEhhbmRsZXJcIjtcclxuaW1wb3J0IHtVaUV2ZW50SGFuZGxlcn0gZnJvbSBcIi4vdWlFdmVudEhhbmRsZXJcIjtcclxuXHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICBHYW1lVWlFbGVtZW50cy5pbml0aWFsaXplKCk7XHJcbiAgICBVaUV2ZW50SGFuZGxlci5pbml0aWFsaXplKCk7XHJcbiAgICBLZXlib2FyZEhhbmRsZXIuaW5pdGlhbGl6ZSgpO1xyXG59O1xyXG5cclxud2luZG93Lm9ucmVzaXplID0gKCkgPT4gVWlFdmVudEhhbmRsZXIuYXJyYW5nZUNhbnZhc1NpemUoKTtcclxuIiwiaW1wb3J0IHtLZXlTdGF0ZXNTdG9yZX0gZnJvbSBcIi4va2V5U3RhdGVzU3RvcmVcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBLZXlib2FyZEhhbmRsZXIge1xyXG4gICAgc3RhdGljIGluaXRpYWxpemUoKSB7XHJcbiAgICAgICAgd2luZG93Lm9ua2V5ZG93biA9IHRoaXMuaGFuZGxlRG93bjtcclxuICAgICAgICB3aW5kb3cub25rZXl1cCA9IHRoaXMuaGFuZGxlVXA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaGFuZGxlRG93bihldmVudDogS2V5Ym9hcmRFdmVudCkge1xyXG4gICAgICAgIGlmIChldmVudC5jb2RlID09IFwiS2V5V1wiKSB7XHJcbiAgICAgICAgICAgIEtleVN0YXRlc1N0b3JlLndEb3duID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGV2ZW50LmNvZGUgPT0gXCJLZXlBXCIpIHtcclxuICAgICAgICAgICAgS2V5U3RhdGVzU3RvcmUuYURvd24gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PSBcIktleVNcIikge1xyXG4gICAgICAgICAgICBLZXlTdGF0ZXNTdG9yZS5zRG93biA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChldmVudC5jb2RlID09IFwiS2V5RFwiKSB7XHJcbiAgICAgICAgICAgIEtleVN0YXRlc1N0b3JlLmREb3duID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgaGFuZGxlVXAoZXZlbnQ6IEtleWJvYXJkRXZlbnQpIHtcclxuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PSBcIktleVdcIikge1xyXG4gICAgICAgICAgICBLZXlTdGF0ZXNTdG9yZS53RG93biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PSBcIktleUFcIikge1xyXG4gICAgICAgICAgICBLZXlTdGF0ZXNTdG9yZS5hRG93biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PSBcIktleVNcIikge1xyXG4gICAgICAgICAgICBLZXlTdGF0ZXNTdG9yZS5zRG93biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZXZlbnQuY29kZSA9PSBcIktleURcIikge1xyXG4gICAgICAgICAgICBLZXlTdGF0ZXNTdG9yZS5kRG93biA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9