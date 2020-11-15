
let now_playing = document.querySelector(".now-playing");
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let playpause_btn = document.querySelector(".playpause-track");
let next_btn = document.querySelector(".next-track");
let prev_btn = document.querySelector(".prev-track");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let track_index = 0;
let isPlaying = false;
let updateTimer;

// Create new audio element
let curr_track = document.createElement('audio');

// Define the tracks that have to be played
let track_list = [
  {
    name: "Night Owl",
    artist: "Broke For Free",
    image: "https://images.pexels.com/photos/2264753/pexels-photo-2264753.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/WFMU/Broke_For_Free/Directionless_EP/Broke_For_Free_-_01_-_Night_Owl.mp3"
  },
  {
    name: "Enthusiast",
    artist: "Tours",
    image: "https://images.pexels.com/photos/3100835/pexels-photo-3100835.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/no_curator/Tours/Enthusiast/Tours_-_01_-_Enthusiast.mp3"
  },
  {
    name: "Shipping Lanes",
    artist: "Chad Crouch",
    image: "https://images.pexels.com/photos/1717969/pexels-photo-1717969.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https://files.freemusicarchive.org/storage-freemusicarchive-org/music/ccCommunity/Chad_Crouch/Arps/Chad_Crouch_-_Shipping_Lanes.mp3",
  },
   {
    name: "Powerless",
    artist: "Linkin Park",
    image: "https://images.genius.com/c5a58cdaab9f3199214f0e3c26abbd0e.1000x1000x1.jpg",
    path: "https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/3.mp3",
  },
   {
    name: "You're Somebody Else",
    artist: "floral cash",
    image: "https://pbs.twimg.com/media/D2NZH-2U4AAL9Xs.jpg",
    path: "https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/2.mp3",
  },
   {
    name: "Seni Dert Etmeler",
    artist: "Madrigal",
    image: "https://www.radyomega.fm/wp-content/uploads/2020/04/MADRIGAL-600.jpg",
    path: "https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/4.mp3",
  },
   {
    name: "Ederlezi",
    artist: "Solomun",
    image:"https://m.media-amazon.com/images/I/616t0841uvL._SS500_.jpg",
    path: "https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/5.mp3",
  },
   {
    name: "Yıldız Tozu",
    artist: "Ozbi",
    image: "https://images.genius.com/ee202c6f724ffd4cf61bd01a205eeb47.1000x1000x1.jpg",
    path: "https://raw.githubusercontent.com/ustabasiibrahim/music-player/master/assets/music/1.mp3",
  },
  {
    name: "Barnie Be Good Tonight",
    artist: "Lobo Locoh",
    image: "https://freemusicarchive.org/image?file=image%2FwBhYNn6ldcDikf1LIGSv3ytdj4tsusXoeSwd8GYM.jpeg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/cZqd8m8wTUmTIDtDJ9obVbmFTUlKROhsWLo5Uk8d.mp3",
   
  },
  {
    name: "Frisco Bar at Midnight ",
    artist: "Till Paradiso",
    image: "https://freemusicarchive.org/image?file=image%2FfzEHDhutZoyBH7otaIwzDMv90fLqsKx5ZPmWeReu.jpeg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/HEHgcv8yykoF0SlVnrwqJzalB87dYDYccK2tFaj8.mp3",
  },
  {
    name: " Ginger Underground",
    artist: "Till Paradiso",
    image: "https://freemusicarchive.org/image?file=image%2FfzEHDhutZoyBH7otaIwzDMv90fLqsKx5ZPmWeReu.jpeg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/4ZsKvzDwpSM7OMnsRAEyAmOJDDjxsh4gc9GzLzEW.mp3",
  },
  {
    name: "Sunshine-Send-Off",
    artist: "Ketsa",
    image: "https://freemusicarchive.org/image?file=image%2FaoKxkNs1ETEF7eTqRIfxWyaSKNo7oSUmUH0hFktk.jpeg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/LRm0gcXzKxZZSJewUdAO7pEp4VB6wHEXuWv2K2GD.mp3",
  },
  {
    name: "Stumptown Soul Holiday Spectacular",
    artist: "The Song Circle",
    image: "https://freemusicarchive.org/image?file=images%2Falbums%2FStumptown_Soul_Holiday_Spectacular_-_Live_at_KBOO_for_The_Songcircle_12152017_-_20190307123805193.png&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/music\/KBOO\/Stumptown\/Live_at_KBOO_for_The_Songcircle_12152017\/Stumptown_-_01_-_Stumptown_Soul_Spectacular-Dec_2017-LIVE.mp3",
  },
  {
    name: "Blues Junction",
    artist: "Norman Sylvester & Tevis Hodge Jr.",
    image: "https://freemusicarchive.org/image?file=images%2Falbums%2FReverend_Freakchild_-_Live_at_KBOO_for_Blues_Junction_08092017_-_20190227211015316.png&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/music\/KBOO\/norman_syl\/Live_at_KBOO_for_Grateful_Dead__Friends_04082017\/norman_syl_-_01_-_Norman_Sylvester_Tevis_HodgeJr-Apr_2017-LIVE.mp3",
  },
  {
    name: "Boogie Man",
    artist: "Yung Kartz",
    image: "https://images.pexels.com/photos/1717969/pexels-photo-1717969.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/YMtVyiSpdyqShZKs7CGUsnOEe3P91msGu6srJ599.mp3",
  },
  {
    name: "Undercover",
    artist: "Ketsa",
    image: "https://freemusicarchive.org/image?file=image%2FfxF1npUnwLH5N8PjErj9ytKD1ik0kP8hthqsoKnQ.jpeg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/0ETYLv9rJguKWNjhjMX0FRAPpJLFgDSyyiKBoEg7.mp3",
  },
  {
    name: "Algorithms",
    artist: "Chad Crouch",
    image: "https://freemusicarchive.org/image?file=images%2Falbums%2FChad_Crouch_-_Arps_-_20190913144052757.jpg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/music\/ccCommunity\/Chad_Crouch\/Arps\/Chad_Crouch_-_Algorithms.mp3",
  },
  {
    name: "Exotica",
    artist: "Juanitos",
    image: "https://freemusicarchive.org/image?file=images%2Falbums%2FExotica_-_20100108174557640.jpg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/music\/Oddio_Overplay\/Juanitos\/Exotica\/Juanitos_-_06_-_Exotica.mp3",
  },
  {
    name: "Funky Garden",
    artist: "Ketsa",
    image: "https://freemusicarchive.org/image?file=image%2FaoKxkNs1ETEF7eTqRIfxWyaSKNo7oSUmUH0hFktk.jpeg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/jUYdypC11ACzaNLDsTZ9qmNRiNlSCvYBLgoeOwbm.mp3",
  },
  {
    name: "African Blissr",
    artist: "John Bartmann",
    image: "https://freemusicarchive.org/image?file=images%2Ftracks%2FTrack_-_2019021854737559&width=290&height=290&type=track",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/music\/ccCommunity\/John_Bartmann\/Royalty-Free_Soundtrack_Music_Album_Two\/John_Bartmann_-_17_-_African_Bliss.mp3",
  },
  {
    name: "Draco",
    artist: " Yung Kartz",
    image: "https://images.pexels.com/photos/1717969/pexels-photo-1717969.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/nipPClUpbHCTeVE6yhb9iwes5JTf6n8PWBavvjOg.mp3",
  },
  {
    name: "Further discovery",
    artist: " Blear Moon",
    image: "https://freemusicarchive.org/image?file=image%2FqazBm5lmvNIv5fdG62BloNXbILxefqseckBTMcwe.jpeg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/MkkkaxbkjeLgNyMSlNWBB0EqH3XTbRrzItUvSX8D.mp3",
  },
 
  {
    name: "SameWay",
    artist: "Makaih Beats",
    image: "https://freemusicarchive.org/image?file=image%2F9DjRaq10N7tLsoFiukqwKQcLGST8HsaYIAo6BMNn.jpeg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/ArlUHnr1DA6MM4ZemdXBtYrPx1QzyhSPBxs3vMu3.mp3",
  },
  {
    name: "Full of Love",
    artist: "Till Paradiso",
    image: "https://freemusicarchive.org/image?file=image%2FfzEHDhutZoyBH7otaIwzDMv90fLqsKx5ZPmWeReu.jpeg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/0ETYLv9rJguKWNjhjMX0FRAPpJLFgDSyyiKBoEg7.mp3",
  },
  {
    name: "Not Without You - Instrumental",
    artist: "Lobo Loco",
    image: "https://freemusicarchive.org/image?file=image%2FZ5szKizBxe7QAEyfcdeH2b29pplzq3QRuYoboNjY.jpeg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/Hsob3o1pH36Y8LyqceoK4VvJEQpdbSKu6BeMH7Q5.mp3",
  },
   {
    name: "It's Your Birthday!",
    artist: " Monk Turner + Fascinoma",
    image: "https://freemusicarchive.org/image?file=images%2Falbums%2FThe_New_Birthday_Song_Contest_-_20121206162017883.png&width=155&height=155&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/music\/WFMU\/Monk_Turner__Fascinoma\/The_New_Birthday_Song_Contest\/Monk_Turner__Fascinoma_-_01_-_Its_Your_Birthday.mp3",
  },
   {
    name: "Turbochaser",
    artist: " TRG Banks",
    image: "https://freemusicarchive.org/image?file=image%2FGk5Dgx6eetnPvriLR1lPhiAPKVpJqHeqevpDh3Y0.png&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/0y93yxx26n6aowwvA6uy4pHZ4OCpLjgF9fiNCdJr.mp3",
  },
   {
    name: "Decapod",
    artist: "Andy G. Cohen",
    image: "https://freemusicarchive.org/image?file=image%2F85PRTqxnDQ90YdeImrf0Ewgi0focjOHUtzWbHprX.jpeg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/LpxVDgQOMAOTBRXUYF7P5XpBcjwlInV2vhqfBsTB.mp3",
  },
   {
    name: "Outsider's Paradox",
    artist: "springtide",
    image: "https://freemusicarchive.org/image?file=images%2Falbums%2Fspringtide_-_Sounds_strange_weird_but_unmistakably_romantic_Vol1_-_2019032213645613.jpg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/tfn6lEdnf6kiIC1Tf2QUF8VzUyqFCpYZBUCU1JzN.mp3",
  },
   {
    name: "T-Shirts Silly Bus",
    artist: "Captive Portal",
    image: "https://freemusicarchive.org/image?file=images%2Falbums%2FCaptive_Portal_-_Somethign_Abbadat_-_EP_-_20170413174105969.jpg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/music\/no_curator\/Captive_Portal\/Somethign_Abbadat_-_EP\/Captive_Portal_-_05_-_T-Shirts_Silly_Bus.mp3",
  },
   {
    name: "o tannenbaum",
    artist: "Dee Yan-Key",
    image: "https://freemusicarchive.org/image?file=track_image%2FMtzqYIhm5dmcw65Tm0Ag0AAuBK30zgMlT2kh9iga.jpeg&width=290&height=290&type=track",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/JeSGm3URxWWfLTv7ocJHb82jNrYCOFVWQ1G5epfQ.mp3",
  },
   {
    name: "Waves Of Indigo ",
    artist: "Daniel Birch",
    image: "https://freemusicarchive.org/image?file=image%2Fw8tRjTtqh3RRPkSQAYBLpPVnvQLkn2obJBVY1Obl.jpeg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/AvhMSMZJls8RKrzw9xRHPymgY07i1PHkrJi5Djqk.mp3",
  },
   {
    name: "Lonely Spider",
    artist: " Cullah",
    image: "https://freemusicarchive.org/image?file=images%2Falbums%2FCullah_-_Cullahmity_-_2017042715841725.jpg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/music\/Music_for_Video\/Cullah\/Cullahmity\/Cullah_-_04_-_Lonely_Spider.mp3",
  },
   {
    name: "Go Down Moses",
    artist: "Dee Yan-Key",
    image: "https://freemusicarchive.org/image?file=image%2FLhInxlaDIe1TlN6uLrcWc9blkEOMjOOL0CI8Vmn7.jpeg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/IelBGwUxhP2gUTxSmsZFt9DT5Plc02A8HU544qlV.mp3",
  },
   {
    name: "Stockholm",
    artist: "Six Umbrellas",
    image: "https://freemusicarchive.org/image?file=images%2Ftracks%2FTrack_-_20190405143626815&width=290&height=290&type=track",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/music\/White_Market_Podcast\/Six_Umbrellas\/Private_Ark\/Six_Umbrellas_-_08_-_Stockholm.mp3",
  },
  {
    name: "Starling",
    artist: "Podington Bear",
    image: "https://freemusicarchive.org/image?file=images%2Ftracks%2FTrack_-_20130403174754372&width=290&height=290&type=track",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/music\/Music_for_Video\/Podington_Bear\/Solo_Instruments\/Podington_Bear_-_Starling.mp3",
  },
 
  {
    name: "Covid Blues",
    artist: "Derek Clegg",
    image: "https://freemusicarchive.org/image?file=image%2FENB5PtIabzANbzUk2gsfoGq03PCvwksaKPajEdsQ.jpeg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/Y7nZPKXnQ14pX7urofEDmiq4lhcN8iqm9pTm11H1.mp3",
  },
  {
    name: "Hoist",
    artist: " Andy G. Cohen",
    image: "https://freemusicarchive.org/image?file=image%2F85PRTqxnDQ90YdeImrf0Ewgi0focjOHUtzWbHprX.jpeg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/h83eIwFoiIvSKpWThZAAKbFrYPBFPwTHJUHWeQlc.mp3",
  },
  {
    name: "Sun and Prosper",
    artist: "Ketsa",
    image: "https://freemusicarchive.org/image?file=image%2FfxF1npUnwLH5N8PjErj9ytKD1ik0kP8hthqsoKnQ.jpeg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/bkgWchraAR7X7WiMgI54Ap6hSECdjfX9aXr4VtnJ.mp3",
  },
  {
    name: "Night Watch",
    artist: " Blue Dot Sessions",
    image: "https://freemusicarchive.org/image?file=images%2Falbums%2FBlue_Dot_Sessions_-_RadioPink_-_20190909165240638.jpg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/music\/Music_for_Video\/Blue_Dot_Sessions\/RadioPink\/Blue_Dot_Sessions_-_Night_Watch.mp3",
  },
  {
    name: "Hurrycane",
    artist: "Cullah",
    image: "https://freemusicarchive.org/image?file=images%2Falbums%2FCullah_-_Cullahsus_-_20180503170131910.jpg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/music\/Music_for_Video\/Cullah\/Cullahsus\/Cullah_-_09_-_Hurrycane.mp3",
  },
  {
    name: "My Little Kingdom",
    artist: "Golden Duck Orchestra",
    image: "https://freemusicarchive.org/image?file=images%2Falbums%2FGolden_Duck_Orchestra_-_Golden_Duck_Orchestra_1st_EP_-_20171023191251555.jpg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/music\/ccCommunity\/Golden_Duck_Orchestra\/Golden_Duck_Orchestra_1st_EP\/Golden_Duck_Orchestra_-_05_-_My_Little_Kingdom.mp3",
  },
  {
    name: "I Trust You",
    artist: "Derek Clegg",
    image: "https://freemusicarchive.org/image?file=image%2FrzYUuk0grqHQ4BMfLuso1fVivjVao0ZukO1SV5i4.jpeg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/qKhlm3GJ6VWR6s8xBQhXrJ18szrxTBx0FTI3KWAw.mp3",
  },
  {
    name: "Shangri La",
    artist: "Kielicaster",
    image: "https://freemusicarchive.org/image?file=image%2FIYwyKUNRpVCYpjN7SdwAfodTAm33dWyBHmNOQrSo.jpeg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/UifliKn5FMNpoHpi87AmkaF3dLA4xeAjK0q8KhiD.mp3",
  },
  {
    name: "Alduarthan",
    artist: "The Mind Orchestra",
    image: "https://freemusicarchive.org/image?file=track_image%2FGWDqyOznbcnHUlErsMsJHm3eH9d4mkgoyv05ehx5.jpeg&width=290&height=290&type=track",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/TEluOGWoDweKYS1eA6e86gwRdR4wCSXo0Dhrrt9D.mp3",
  },
  {
    name: "Little Star",
    artist: "Manuele Atzeni",
    image: "https://freemusicarchive.org/image?file=images%2Ftracks%2FManuele_Atzeni_-_04_-_Little_Star_-_20140220173659244.jpg&width=290&height=290&type=track",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/music\/WM_Recordings\/Manuele_Atzeni\/The_Miyazaki_Tour_EP\/Manuele_Atzeni_-_04_-_Little_Star.mp3",
  },
  {
    name: "side effects",
    artist: "Fog Lake",
    image: "https://freemusicarchive.org/image?file=images%2Falbums%2FFog_Lake_-_Dragonchaser_-_2017062845544062.jpg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/music\/Ziklibrenbib\/Fog_Lake\/Dragonchaser\/Fog_Lake_-_08_-_side_effects.mp3",
  },
  {
    name: "Frosty Jack's Supernova",
    artist: " Doctor Turtle",
    image: "https://freemusicarchive.org/image?file=image%2Fm96fRWmW14vDGWY0afCQCVUOJ6jPxG0ohAuqdpiB.jpeg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/VVmxPZ7qnDY1yc2cF1ty8bvFTZv0Dbyi53F7pM0L.mp3",
  },
  {
    name: "Futures in Atrophy",
    artist: "Aglow Hollow",
    image: "https://freemusicarchive.org/image?file=image%2FbQUqg7txMpnZcVugtLW08Yrzz7suMXZYUMgj2xFi.png&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/dppiAXiQn5dSQNohLmS3xtpJuBvwe4NgVnNLk1MZ.mp3",
  },
  {
    name: "Expanding lands",
    artist: "Blear Moon",
    image: "https://freemusicarchive.org/image?file=image%2FqazBm5lmvNIv5fdG62BloNXbILxefqseckBTMcwe.jpeg&width=290&height=290&type=image",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/MkkkaxbkjeLgNyMSlNWBB0EqH3XTbRrzItUvSX8D.mp3",
  },
  {
    name: "Mars",
    artist: "Nctrnm",
    image: "https://freemusicarchive.org/image?file=images%2Falbums%2FNctrnm_-_Xenon_-_Single_-_20180103195540365.JPG&width=155&height=155&type=image?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/BMUTivVxtpRQzIxziL3D6zb165ypsC5YLKlmhEhu.mp3",
  },
  {
    name: "More Scared of Your",
    artist: "Nihilore",
    image: "https://freemusicarchive.org/image?file=images%2Ftracks%2FTrack_-_2019021315744636&width=290&height=290&type=track",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/music\/ccCommunity\/Nihilore\/Best_of_2018\/Nihilore_-_09_-_More_Scared_of_You.mp3",
  },
  {
    name: "Gazing",
    artist: "Andy G. Cohen",
    image: "https://freemusicarchive.org/image?file=image%2F85PRTqxnDQ90YdeImrf0Ewgi0focjOHUtzWbHprX.jpeg&width=290&height=290&type=image?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/jcu1vbYLlql4FsTg6dZJcNnBmifHiuh7Qu1dLbVo.mp3",
  },
  {
    name: "kerosene",
    artist: "Fog Lake",
    image: "https://freemusicarchive.org/image?file=images%2Falbums%2FFog_Lake_-_Dragonchaser_-_2017062845544062.jpg&width=290&height=290&type=image?auto=compress&cs=tinysrgb&dpr=3&h=250&w=250",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/music\/Ziklibrenbib\/Fog_Lake\/Dragonchaser\/Fog_Lake_-_04_-_kerosene.mp3",
  },
  {
    name: "Picasso",
    artist: "Yung Kartz",
    image: "https://freemusicarchive.org/image?file=images%2Ftracks%2FTrack_-_20190405143626815&width=290&height=290&type=track",
    path: "https:\/\/files.freemusicarchive.org\/storage-freemusicarchive-org\/tracks\/29a0H5hUVAzs2kd5Z4kxJcHAaCTXI2DDDPMdZtWB.mp3",
  },
  
];

function random_bg_color() {

  // Get a number between 64 to 256 (for getting lighter colors)
  let red = Math.floor(Math.random() * 256) + 64;
  let green = Math.floor(Math.random() * 256) + 64;
  let blue = Math.floor(Math.random() * 256) + 64;

  // Construct a color withe the given values
  let bgColor = "rgb(" + red + "," + green + "," + blue + ")";

  // Set the background to that color
  document.body.style.background = bgColor;
}

function loadTrack(track_index) {
  clearInterval(updateTimer);
  resetValues();
  curr_track.src = track_list[track_index].path;
  curr_track.load();

  track_art.style.backgroundImage = "url(" + track_list[track_index].image + ")";
  track_name.textContent = track_list[track_index].name;
  track_artist.textContent = track_list[track_index].artist;
  now_playing.textContent = "PLAYING " + (track_index + 1) + " OF " + track_list.length;

  updateTimer = setInterval(seekUpdate, 1000);
  curr_track.addEventListener("ended", nextTrack);
  random_bg_color();
}

function resetValues() {
  curr_time.textContent = "00:00";
  total_duration.textContent = "00:00";
  seek_slider.value = 0;
}

// Load the first track in the tracklist
loadTrack(track_index);

function playpauseTrack() {
  if (!isPlaying) playTrack();
  else pauseTrack();
}

function playTrack() {
  curr_track.play();
  isPlaying = true;
  playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}

function pauseTrack() {
  curr_track.pause();
  isPlaying = false;
  playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';;
}

function nextTrack() {
  if (track_index < track_list.length - 1)
    track_index += 1;
  else track_index = 0;
  loadTrack(track_index);
  playTrack();
}

function prevTrack() {
  if (track_index > 0)
    track_index -= 1;
  else track_index = track_list.length;
  loadTrack(track_index);
  playTrack();
}

function seekTo() {
  seekto = curr_track.duration * (seek_slider.value / 100);
  curr_track.currentTime = seekto;
}

function setVolume() {
  curr_track.volume = volume_slider.value / 100;
}

function seekUpdate() {
  let seekPosition = 0;

  if (!isNaN(curr_track.duration)) {
    seekPosition = curr_track.currentTime * (100 / curr_track.duration);

    seek_slider.value = seekPosition;

    let currentMinutes = Math.floor(curr_track.currentTime / 60);
    let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
    let durationMinutes = Math.floor(curr_track.duration / 60);
    let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

    if (currentSeconds < 10) { currentSeconds = "0" + currentSeconds; }
    if (durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
    if (currentMinutes < 10) { currentMinutes = "0" + currentMinutes; }
    if (durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

    curr_time.textContent = currentMinutes + ":" + currentSeconds;
    total_duration.textContent = durationMinutes + ":" + durationSeconds;
  }
}







