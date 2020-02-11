(function(){
	
	// 리사이즈 이벤트
	var retroSpaces = [];
	window.addEventListener( "resize", function(){
		
		for( var i=0; i<retroSpaces.length; ++i ){
			var retroSpace = retroSpaces[ i ];
			retroSpace.resize();
		}
		
	} );
	
	// 배경 클래스
	function RetroSpace( selector ){
		
		this.container = document.querySelector( selector );
		this.canvas = document.createElement( "canvas" );
		this.ctx = canvas.getContext( "2d" );
		RetroSpaces.push( this );
		this.resize();
		
	}
	RetroSpace.prototype.resize = function(){
		
		var rect = this.container.getBoundingClientRect();
		var width = rect.width;
		var height = rect.height;
		
		this.canvas.width = width;
		this.canvas.height = height;
		this.canvas.style.width = width + "px";
		this.canvas.style.height = height + "px";
		
	};
	
})();