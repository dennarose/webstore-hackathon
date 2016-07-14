var book1 = {
  id: "book1",
  name: "Romeo and Juliet",
  author: "William Shakespeare",
  category: "Books",
  price: 9.99,
  selling_point: ["Hardcover!", "A Must Read!", "Timeless Classic!"],
  picture_url: "http://www.loyalbooks.com/image/detail/Romeo-and-Juliet.jpg"
}

var book2 = {
  id: "book2",
  name: "The Iliad and The Odyssey",
  author: "Homer",
  category: "Books",
  price: 19.99,
  selling_point: ["A Great Book!", "Timeless Classic!", "2 books in 1!"],
  picture_url: "http://cdn06.strandbooks.weblinc.com/images/products/partitioned/2/9/2/1435110439.1.zoom.jpg"
}

var cd1 = {
  id: "cd1",
  name: "Mozart 250th Anniversary",
  author: "Wolfgang Amadeus Mozart",
  category: "Music",
  price: 15.99,
  selling_point: ["Relaxing!", "Timeless!", "8 CDs in 1!"],
  picture_url: "http://i43.tower.com/images/mm106170376/mozart-250th-anniversary-a-robert-johnson-cd-cover-art.jpg"
}

var cd2 = {
  id: "cd2",
  name: "The Phantom of the Opera",
  author: "Various Artists",
  category: "Music",
  price: 5.99,
  selling_point: ["Spectacular!", "Hauntingly mesmerizing!", "Beautiful and romantic!"],
  picture_url: "https://images-na.ssl-images-amazon.com/images/I/41NNDFy%2BgCL._SL500_AA280_.jpg"
}


var romeo = function (obj) {
$('#' + obj.id + ' img').attr('src', obj.picture_url);
$('#' + obj.id + ' .name').text(obj.name);
$('#' + obj.id + ' .author').append(obj.author);
$('#' + obj.id + ' .category').append(obj.category);
$('#' + obj.id + ' .price').append(obj.price);
for (var i = 0; i < obj.selling_point.length; i++) {
  $('#' + obj.id + ' ul').append('<li>' + obj.selling_point[i] + '</li>');
 }
}

var homer = function (obj) {
$('#' + obj.id + ' img').attr('src', obj.picture_url);
$('#' + obj.id + ' .name').text(obj.name);
$('#' + obj.id + ' .author').append(obj.author);
$('#' + obj.id + ' .category').append(obj.category);
$('#' + obj.id + ' .price').append(obj.price);
for (var i = 0; i < obj.selling_point.length; i++) {
  $('#' + obj.id + ' ul').append('<li>' + obj.selling_point[i] + '</li>');
 }
}

var mozart = function (obj) {
$('#' + obj.id + ' img').attr('src', obj.picture_url);
$('#' + obj.id + ' .name').text(obj.name);
$('#' + obj.id + ' .author').append(obj.author);
$('#' + obj.id + ' .category').append(obj.category);
$('#' + obj.id + ' .price').append(obj.price);
for (var i = 0; i < obj.selling_point.length; i++) {
  $('#' + obj.id + ' ul').append('<li>' + obj.selling_point[i] + '</li>');
 }
}

var opera = function (obj) {
$('#' + obj.id + ' img').attr('src', obj.picture_url);
$('#' + obj.id + ' .name').text(obj.name);
$('#' + obj.id + ' .author').append(obj.author);
$('#' + obj.id + ' .category').append(obj.category);
$('#' + obj.id + ' .price').append(obj.price);
for (var i = 0; i < obj.selling_point.length; i++) {
  $('#' + obj.id + ' ul').append('<li>' + obj.selling_point[i] + '</li>');
 }
}

romeo(book1);
homer(book2);
mozart(cd1);
opera(cd2);

$('nav a').on('click', function(){
  var myClass = $(this).attr('id');
  console.log(myClass);
  if(myClass === 'home') {
    $("div.product").show();
  } else {
    $("div.product:not(." + myClass + ")").hide();
    $("div.product." + myClass).show();
  }
  return false;
})
