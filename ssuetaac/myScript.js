var edetails=new Array();
var pdetails=new Array();
$(document).ready(function() {
    $('.pd').hide();
    $('.ed').hide();
    $('#mainbody').css('height',$(window).height());
    $('.profile-li').on('mouseleave touchend',function(){
        $(this).next('.pd').hide();
    });
    $.ajax({
        url: 'eventdetails.json',
        async: false,
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                obj = {};
                obj['id'] = data[i].id;
                obj['title']=data[i].title;
                obj['details'] = data[i].details;
                obj['photos']=data[i].photos;
                edetails.push(obj);
            }

        },
        error: function(xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
    $.ajax({
        url: 'peopledetails.json',
        async: false,
        success: function (data) {
            for (var i = 0; i < data.length; i++) {
                obj = {};
                obj['id'] = data[i].id;
                obj['pname']=data[i].pname;
                obj['details'] = data[i].details;
                pdetails.push(obj);
            }

        },
        error: function(xhr, status, error) {
            var err = eval("(" + xhr.responseText + ")");
            alert(err.Message);
        }
    });
});
function popelist(){
    mystring='<h2>Events</h2><ul class="events-ul">';
    for(var i=0;i<edetails.length;i++)
        mystring+='<li class="events-li" onclick="fetcheventdetails('+i+')">'+edetails[i].title+'</li>';
    mystring+='</ul><div id="detailsdiv" class="ed"></div>';
    document.getElementById('mdiv').innerHTML=mystring;
}
function popplist(){
    mystring='<h2>People</h2><ul class="profile-ul">';
    for(var i=0;i<pdetails.length;i++)
        mystring+='<li class="profile-li" onclick="fetchpd('+i+')">'+pdetails[i].pname+'</li>';
    mystring+='</ul><div id="detailsdiv" class="pd"></div>';
    document.getElementById('mdiv').innerHTML=mystring;
}
function fetchpd(peopleid){
    mydetails=pdetails[peopleid].details.toString();
    //alert(mydetails);
    document.getElementById('detailsdiv').innerHTML='<span class="dback">Back</span><br><br>'+mydetails;
    $('#detailsdiv').show();
    $('.profile-ul').hide();
    $('.dback').on('click', function () {
       $(this).parent().hide();
        $('.profile-ul').show();
    });
}
function fetcheventdetails(eventid){
    mydetails=edetails[eventid].details.toString().replace(/\n/g,'<br>');
    myphotos=edetails[eventid].photos.toString();
    document.getElementById('detailsdiv').innerHTML='<span class="dback">Back</span><br><br>'+mydetails+'<br>'+myphotos;

    $('.dback').on('click',function (){
        $(this).parent().hide();
        $('.events-li').show();
    });

     /*$('.eventpic').on('click',function(){
        mysrc=this.src.toString().substr(0,this.src.toString().length-6);
        mysrc+='.jpg';
        document.getElementById('bigpicviewer').style.height='100vh';
        document.getElementById('bigpicviewer').style.backgroundColor='rgba(40,40,40,0.8)';
        document.getElementById('bigpicviewer').innerHTML='<div class="bpvhelper"></div>';
        document.getElementById('bigpicviewer').innerHTML+='<img class="eventbigpic bpvend" src="'+mysrc+'"><br><span class="bpvend">Back</span>';
        document.getElementById('bigpicviewer').hidden=false;
        document.getElementById('hdiv').hidden=true;
        document.getElementById('mdiv').hidden=true;
        document.getElementById('fdiv').hidden=true;
       $('.bpvend').on('click',function(){
           document.getElementById('bigpicviewer').innerHTML='';
           document.getElementById('bigpicviewer').hidden=true;
           document.getElementById('hdiv').hidden=false;
           document.getElementById('mdiv').hidden=false;
           document.getElementById('fdiv').hidden=false;
       });
    });*/

    $('.events-li').hide();
    $('#detailsdiv').show();
}
function myhighlighter(x){
	x.style.backgroundColor='rgba(0,150,150,0.6)';
}
