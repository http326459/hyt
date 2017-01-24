//实现滚动条无法滚动
		var mo=function(e){e.preventDefault();};
/***禁止滑动***/
function stop(){
	document.body.style.overflow='hidden';        
	document.addEventListener("touchmove",mo,false);//禁止页面滑动
}
/***取消滑动限制***/
function move(){
	document.body.style.overflow='auto';//出现滚动条
	document.removeEventListener("touchmove",mo,false);        
}
//蒙层
function modal_hy(){
	var modal=document.createElement('div');
	//location.href ="#top";
	modal.id="b_modal";
	modal.className="modal";
	document.body.appendChild(modal);
}
function absm(num,txt){
	//蒙版层
	modal_hy();
	var modal=document.getElementById('b_modal');
	//通用框架
	var bof=document.createElement('div');
	bof.id = "box";
	bof.className = "obtain";
	var html='<a href="javascript:;" class="Shut" id="shut"><img src="images/chac.png"/></a>'+
			'<div class="inobtain"><img src="images/tank.png"/>'+
			'<div class="inobtaintxt"><h3>大神附体，又答对<span>'+num+'</span>道题</h3>'+
			'<p>'+txt+'</p></div>'+
			'<a href="javascript:;" class="determine" id="link"><img src="images/tkqd.png"/></a></div>';
	bof.innerHTML=html;
	document.body.appendChild(bof);
	//选取
	var box=document.getElementById('box');
	var close=document.getElementById('shut');
	var close1=document.getElementById('link');
	modal.style.display="block";
	box.style.display="block";
	stop();
	close.onclick=function(){
		move();
		document.body.removeChild(modal);
		document.body.removeChild(bof);		
	};
	close1.onclick=function(){
		move();
		document.body.removeChild(modal);
		document.body.removeChild(bof);		
	};
};

function absm2(txt){
	//蒙版层
	modal_hy();
	var modal=document.getElementById('b_modal');
	//通用框架
	var bof=document.createElement('div');
	bof.id = "box";
	bof.className = "Losebifa";
	var html='<p>'+txt+'</p>'+
		'<a href="javascript:;" class="fink" id="link">确定</a>';
	bof.innerHTML=html;
	document.body.appendChild(bof);
	//选取
	var box=document.getElementById('box');
	var close=document.getElementById('link');
	modal.style.display="block";
	box.style.display="block";
	stop();
	close.onclick=function(){
		move();
		document.body.removeChild(modal);
		document.body.removeChild(bof);		
	};
};