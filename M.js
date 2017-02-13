//类jQuery
    (function(root){
    	if(!String.prototype.trim){
	    	String.prototype.trim = function(){
	    		return this.replace(/^(\s*)|(\s*)$/g,'');
	    	}
        }
    	function hasClass(node,cls){  //判断class是否存在
    		var re = new RegExp(`\\b${cls}\\b`);
    		if(re.test(node.className)){
    			return true;
    		}
    		return false;
    	}
    	function addEvent(node,type,handler){  //事件绑定
    		if(node.addEventListener){
    			node.addEventListener(type,handler,false);
    		}else if(node.attachEvent){
    			node.attachEvent('on'+type,function(){
    				handler.call(node);
    			});
    		}
    	}
    	function getStyle(node,key){   //  获取css
    		if(node.currentStyle){
    			return node.currentStyle[key];
    		}else{
    			return window.getComputedStyle(node,null)[key];
    		}
    		
    	}
    	root.$ = function(sele){
    		return new Tools(sele);
    	}
    	function Tools(sele){     
            var first = sele.substr(0,1);
                isArr = sele.split(' ');
            if(first==='#' && isArr.length===1){
            	this[0] = document.getElementById(sele.substr(1));
            	this.length = 1;
            }else{
                var arr = Array.prototype.slice.call(document.querySelectorAll(sele));
                for(var i=0;i<arr.length;i++){
                	this[i] = arr[i];
                }
                this.length = arr.length;
            }
            this.version = '1.0.0';
            return this;
    	}
    	Tools.prototype = {
    		constructor:Tools,
    		css : function(style,value){  //设置css
    			if(style && typeof style==='string' && !value){
    				for(var i=0;i<this.length;i++){
    					return getStyle(this[i],style);
    				}
    			}else if(style && typeof style==='object' && !value){
    				for(var i=0;i<this.length;i++){
    					for(var j in style){
    						this[i].style[j] = style[j];
    					}
    				}
    			}else if(style && typeof style==='string' && value){
    				for(var i=0;i<this.length;i++){
    					this[i].style[style] = value;
    				}
    				return this;
    			}

    		},
    		addClass : function(cls){  //添加class
    			var re = new RegExp(`\\b${cls}\\b`);
    			for(var i=0;i<this.length;i++){
    				if(!hasClass(this[i],cls)){
    					this[i].className+=' '+cls;
    				}
    				this[i].className = this[i].className.trim();
    			}
    			return this;
    		},
    		removeClass : function(cls){  //移除class
    			var re = new RegExp(`\\b${cls}\\b`);
    			for(var i=0;i<this.length;i++){
    				if(hasClass(this[i],cls)){
    					this[i].className = this[i].className.replace(re,'').replace(/\s{2}/g,' ').trim();
    				}
    			}
    			return this;
    		},
    		eq : function(i){   //获取某个
    			if(i<this.length){
    			    this[0] = this[i];
    			    this.length=1;
    		    }else{
    		    	this[0] = '';
    		    	this.length = 0;
    		    }
    		    return this;
    		},
    		on : function(type,handler){
    			for(var i=0;i<this.length;i++){
    				addEvent(this[i],type,handler);
    			}
    			return this;
    		}
    	};
    })(window,undefined);
