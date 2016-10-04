```js
    $("#search").watchInput({
      delay : 700,
      input : function(/*newValue*/){
        // user is entering some data...
      },
      inputDone : function(newValue/*, oldValue*/){
        // user finished entering data
        var ref = firebase.database().ref("actors-search-index");
        $("#spinner").show();
        search(ref, newValue, function(){
          $("#spinner").fadeOut("fast");
        });
      }
    });
```