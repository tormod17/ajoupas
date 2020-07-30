  var affiliateLinks = [
    "https://www.amazon.co.uk/gp/product/B00DTXYCOU/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B00DTXYCOU&linkCode=as2&tag=clickaton-21&linkId=7a965e18d33ba53ca5613eef3cf53f09",
    "https://www.amazon.co.uk/Bose-QuietComfort-Wireless-Headphones-Cancelling-Black/dp/B0756CYWWD/ref=as_li_ss_il?crid=3T2Z7DIN6M2Y3&keywords=noise+cancelling+headphones&qid=1553976988&rnid=419152031&s=gateway&sprefix=noise+,aps,134&sr=8-7&linkCode=li1&tag=clickaton-21&linkId=aba6b5ec3d4aac6c9c61addcfcf228a8&language=en_GB",
    "https://www.amazon.co.uk/gp/product/B016WZ15YG/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B016WZ15YG&linkCode=as2&tag=clickaton-21&linkId=5b62feda3e1e5c2c3537abd26764311b",
    "https://www.amazon.co.uk/gp/product/B01CL7YRDU/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B01CL7YRDU&linkCode=as2&tag=clickaton-21&linkId=1ba094711de9338f42680466929243df",
    "https://www.amazon.co.uk/gp/product/B071RSHMJN/ref=as_li_tl?ie=UTF8&camp=1634&creative=6738&creativeASIN=B071RSHMJN&linkCode=as2&tag=clickaton-21&linkId=10c16175c5043b9d6ce611816779c06e"
  ];

  var imageSrcs = [
    "http://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B00DTXYCOU&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL250_&tag=clickaton-21",
    "http://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0756CYWWD&Format=_SL110_&ID=AsinImage&MarketPlace=GB&ServiceVersion=20070822&WS=1&tag=clickaton-21&language=en_GB",
    "http://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B016WZ15YG&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=clickaton-21",
    "http://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B01CL7YRDU&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=clickaton-21",
    "http://ws-eu.amazon-adsystem.com/widgets/q?_encoding=UTF8&MarketPlace=GB&ASIN=B071RSHMJN&ServiceVersion=20070822&ID=AsinImage&WS=1&Format=_SL110_&tag=clickaton-21"
  ];
  var pixels = [
    "http://ir-uk.amazon-adsystem.com/e/ir?t=clickaton-21&l=am2&o=2&a=B00DTXYCOU",
    "https://ir-uk.amazon-adsystem.com/e/ir?t=clickaton-21&language=en_GB&l=li1&o=2&a=B0756CYWWD",
    "http://ir-uk.amazon-adsystem.com/e/ir?t=clickaton-21&l=am2&o=2&a=B016WZ15YG",
    "http://ir-uk.amazon-adsystem.com/e/ir?t=clickaton-21&l=am2&o=2&a=B01CL7YRDU",
    "http://ir-uk.amazon-adsystem.com/e/ir?t=clickaton-21&l=am2&o=2&a=B071RSHMJN"
  ];

function createSlideData(affiliateLinks, imageSrcs, pixels) {
  var slideShow = [];
  for (i = 0, length = pixels.length; i < length; i++) {
    var slide = {};
    slide.pixel = pixels[i];
    slide.affiliateLink = affiliateLinks[i];
    slide.imageSrc = imageSrcs[i];
    slideShow.push(slide);
  }
  return slideShow;
}

function createAffiliateSlide(slideData) {
  var affiliateLink = slideData.affiliateLink;
  var pixel = slideData.pixel;
  var slide = $("<div></div>");
  var anchorWrapper = $('<a class="product" target="_blank">');
  anchorWrapper.attr("href", affiliateLink);
  var image = $('<img border="0"/>');
  image.attr("src", slideData.imageSrc);
  var pixel = $(
    '<img width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;"/>'
  );
  pixel.attr("src", slideData.pixel);
  var button = $(
    '<div class="buy-button"><p>BUY NOW ON</p><img width="50" src="img/amazon_logo.png" /></div>'
  );
  anchorWrapper.append(image, pixel, button);
  slide.append(anchorWrapper);
  return slide;
}

function createAndAppendSlideShow(slides, callback) {
  var numberOfSlides = slides.length;
  var count = 0;
  slides.forEach(function(slideData) {
    var slide = createAffiliateSlide(slideData);
    $(".shop-slide-show").append(slide);
    count++;
    if (count === numberOfSlides) {
      callback();
    }
  });
}

function slickSlideShowInit() {
  $(".shop-slide-show").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 8000
  });
}

$(document).ready(function() {
  var slideData = createSlideData(affiliateLinks, imageSrcs, pixels);
  createAndAppendSlideShow(slideData, slickSlideShowInit);
});
