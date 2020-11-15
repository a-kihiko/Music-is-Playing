


var titleV, artistV, pathV, numV;
function Ready(){
  numV = document.getElementById('numbox').value;
  titleV = document.getElementById('titlebox').value;
  artistV =document.getElementById('artistsbox').value;
  pathV = document.getElementById('pathbox').value;


}


//----------------------------------------------
    document.getElementById('insert').onclick = function(){
      Ready();

      firebase.database().ref('Music/' +numV).set({
        Title: titleV,
        Artist: artistV,
        Path: pathV,
        Num: numV
       

      });
    }
    //---------------------------------------------------
    document.getElementById('select').onclick = function(){
      Ready();

      firebase.database().ref('Music/' + numV).on('value', function(snapshot){
        document.getElementById('titlebox').value = snapshot.val().Title;
        document.getElementById('artistsbox').value = snapshot.val().Artist;
        document.getElementById('pathbox').value = snapshot.val().Path;
        document.getElementById('numbox').value = snapshot.val().Num;

      })

      }
      //---------------------------------- 
      //----------------------------------------------
      document.getElementById('update').onclick = function(){
      Ready();

      firebase.database().ref('Music/' +numV).update({
        Title: titleV,
        Artist: artistV,
        Path: pathV,
        Num: numV

      });
    }
        //----------------------------------------------
        document.getElementById('delete').onclick = function(){
        Ready();

        //firebase.database().ref('Music/' +numV).remove();
    }
  
//---------------------------------------------------------

var playersRef = firebase.database().ref("Music/");

var firstPlayerRef = firebase.database().ref("Music/")

playersRef.on("child_added", function(data, prevChildKey) {
   var musicplayer = data.val();
   console.log("Title: " + musicplayer.Title);
   console.log("Artist " + musicplayer.Artist);
   console.log("Number: " + musicplayer.Num);
   console.log("Path: " + musicplayer.Path);
   console.log("Previous Player: " + prevChildKey);
});
/*firstPlayerRef.on("value", function(data) {
   console.log(data.val());
}, function (error) {
   console.log("Error: " + error.code);
});
*/


/*var playersRef = firebase.database().ref("Music/");

playersRef.on("child_added", function(data, prevChildKey) {
   var  = data.val();
   console.log("Title: " + .Title);


});

*/