<html>
  <head>
     <title>Hello World</title>
         <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
  </head>
  <body>
     <?php echo '<p>Hello World</p>'; ?>
     <button class="button">Click Here</button>
     <div class="data"></div>
  </body>
  <script>
  
  function getThis(){
    $.getJSON("proxy.php", function(data) {
    //first row "title" columns
    $('.data').text(data.feed.entry[0]['gsx$title']['$t']);
    console.log(data.feed.entry[0]['gsx$title']['$t']);
    });
  }
  </script>
  <script>
  $(document).ready(function(){
    $('.button').click(function(e){
      e.preventDefault();
      getThis(); 
    });
  });
  
  
  </script>
  
</html>
