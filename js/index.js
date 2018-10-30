$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

var copyTextareaBtn = document.querySelector('.btn-save');

copyTextareaBtn.addEventListener('click', function(event) {
  var prefix = "PCA"
  var truckList = $("#input-fileName").val();
  var truckArray = truckList.split(" ");
  for (var i = 0; i < truckArray.length; i++) {
    truckArray[i] = prefix + truckArray[i]
  }
  var sortedArray = truckArray.sort();
  var newestArray = sortedArray.join(";");
  document.getElementById('result').innerHTML = newestArray;
  
  var diaryArray = newestArray.split(";");
  var sortedDiaryArray = diaryArray.sort();
  var sortedDiaryList = sortedDiaryArray.join("\r\n");
  document.getElementById('diary-friendly').innerHTML = sortedDiaryList;
});

var copyResult = document.querySelector('.btn-undo');

copyResult.addEventListener('click', function(event) {
  var copyTextarea = document.querySelector('.result');
  copyTextarea.focus();
  copyTextarea.select();
  document.execCommand('copy');
  alert("Result copied to clipboard!")
});