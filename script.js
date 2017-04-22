$(document).ready(function(){
    $.ajax({
        url: 'https://spreadsheets.google.com/feeds/list/1i56pn2V7zMWfdJr8ZA-snJyDpbtEZRpt0Xdp3sOSt1Q/1/public/values?alt=json',
        dataType: 'jsonp',
        success: function(response) {
            // console.log(response.feed.entry[0].gsx$description.$t);
            var responses = response.feed.entry;
            console.log(responses[0].gsx$teams.$t);
            var team = response.feed.entry[Math.random() * responses.length];
            console.log(team);
          }
      });
      $.ajax({
          url: 'https://spreadsheets.google.com/feeds/list/1i56pn2V7zMWfdJr8ZA-snJyDpbtEZRpt0Xdp3sOSt1Q/2/public/values?alt=json',
          dataType: 'jsonp',
          success: function(response) {
              // console.log(response.feed.entry[0].gsx$description.$t);
              console.log(response.feed.entry);
            }
        })
});
