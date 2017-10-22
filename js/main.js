(function(){
	var $ =window.$

	var IMGURLS = ["img/pro.bathroom.jpg", 
				    "img/pro.path.jpg",
				    "img/pro.dinning.jpg",
				    "img/pro.entrance.jpg",
				    "img/pro.kitchen.jpg",
				    "img/pro.masterbedroom.jpg",
				    "img/pro.reception.jpg",
				    "img/pro.roof.jpg",				    
				    "img/pro.twin.jpg",
				    "img/pro.wc.jpg",
				    "img/sky.jpg",
				    "img/pro.swimming.jpg"]

	var imgGallery = {
		INIT: function(){
			var images = this.createImages(IMGURLS);
    		var target = document.getElementById('gallery')
    		this.appendImages(target, images)

		},
    createImages: function(images){
  		var self = this;
  		var imgArray = images.map(function(image){
  		var img = document.createElement('img')
    	    self.setAttributes(img, {
    				src: image,
    				height:"350",
    				width:"600",
    				class:"thumbnail img-responsive"
    		})
    		container = self.createImgContainer(img)
    		return container
  		});
  		return imgArray ;	
  	},
	  setAttributes: function(el, attr){
  		for(var key in attr){
  			el.setAttribute(key, attr[key])
  		}
  	},
  	createImgContainer: function(img){
  		var container = document.createElement('div')
  		container.className += "col-lg-3 col-sm-3 col-xs-6"
  		container.appendChild(img);
  		return container
  	},
    appendImages: function(target, array){
  		var docFrag = document.createDocumentFragment();
  		array.forEach(function(ele){
  				docFrag.appendChild(ele)
  		});
  		target.appendChild(docFrag);
  	}
	}
	//imgGallery.INIT()

	var carouselModal ={
		INIT : function(){
			this.showModal()
			this.controls(IMGURLS);
		},
		showModal: function(){
			var self =this;
			$('.thumbnail').click(function(e){
				var img = e.target.cloneNode(true);
	    		$('.carousel-inner').html(img)
	    		$('#myModal').modal('show'); 
			});
		},
		getCurrentIndex: function(images){
			var src = $('.carousel-inner').children()[0].getAttribute('src')
			return images.indexOf(src);
		},
		getNewIndex: function(eleClass, index){
			var newIndex = index;
			return newIndex += (eleClass.indexOf('right') > -1) ? 1 : -1;
		},
		changeImg: function(index, images){
			 var l = images.length;
			 if( index > (l-1) ){
			 	index = index - l
			 } else if ( index < 0 ){
			 	index = l -index
			 }
			var newSrc = images[index]
		  	var currentImg = $('.carousel-inner').children('img')[0]
		  	currentImg.setAttribute('src', newSrc);
		},
		controls: function(images){
			var self= this;
			$('.carousel-control').click(function(e){
				var currentIndex = self.getCurrentIndex(images);
     			var activeClass = e.target.getAttribute('class');
			  	var newIndex = self.getNewIndex(activeClass, currentIndex);
				self.changeImg(newIndex, images);
			})
		}

	

	}
 	carouselModal.INIT()

}())