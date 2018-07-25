$(document).ready(function () {
    //menu related starts
    var flag=true;
    $('.hamburger').hide();
    $('.hmenu').hide();
    $('.hamburger').on("click",function(){
        $('.hmenu').slideToggle('slow');
        if(flag) {$(this).html('X'); flag=false;$(this).css('background','rgba(200, 240,200, 0.7)');}
        else { $(this).html('&#9776;'); flag=true;$(this).css('background','none');}
    });
    //menu related ends

    mystart();

    function mystart(){
        //menu related starts
        $('.hmenuulli').on('click', function () {
            $('.hmenu').hide();
            $('.hamburger').html('&#9776;'); flag=true;$('.hamburger').css('background','none');
        });
        //menu related ends
        $('#home').css({
            'height':$(window).height()+'px',
            'width':$(window).width()+'px',
            'background': 'url(mysign.jpg) no-repeat center center'
        });
        $('#about').css('min-height',$(window).height());
        $('#contact').css('height',$(window).height());
        //make triangles for project names
        var mycolors=[
            "rgba(150, 190,180, 0.7)",
            "rgba(130, 180, 140, 0.7)",
            "rgba(0,92,95, 0.7)",
            "rgba(192,171,200, 0.7)",
            "rgba(49, 5,109, 0.7)",
            "rgba(91,3,127, 0.7)",
            "rgba(30,0,110,0.7)",
            "rgba(0,50,130,0.7)"
        ];
        var windowwidth=$(window).width();
        if(windowwidth>800) {
            m = $(window).width() / 3;//calculate width of the triangles depending on screen width
            p = m - 250;//calculate how far apart should left triangles be from right triangles
            $('body').css('font-size','1.4em');
            $('.nav-list').show();
            $('.hamburger').hide();
            $('.hmenu').hide();
        }
        else
        {
            m= windowwidth/1.5;
            p= m-450;
            $('body').css('font-size','1em');
            $('.nav-list').hide();
            $('.hamburger').show();
        }
        for(var i=0;i<8;i++)
        {
            var j=i+1;
            var k=-100*i;//calculate vertical offset for the triangles
            if(j%2===0){
                //its a right triangle
                $('#t'+j).css({
                    'margin':'0 auto',
                    'position': 'relative',
                    'top': k+'px',
                    'right':'-'+p+'px',
                    'width': '0',
                    'height': '0',
                    'border-left': '100px solid transparent',
                    'border-top' : '100px solid transparent',
                    'border-right': m+'px solid '+mycolors[i],
                    'border-bottom': '100px solid transparent'
                });
            }
            else{
                //its a left triangle
                $('#t'+j).css({
                    'margin':'0 auto',
                    'position': 'relative',
                    'top':k+'px',
                    'left':'-'+p+'px',
                    'width': '0',
                    'height': '0',
                    'border-left': m+'px solid '+mycolors[i],
                    'border-top' : '100px solid transparent',
                    'border-right': '100px solid transparent',
                    'border-bottom': '100px solid transparent'
                });
            }
        }
        if(windowwidth>430){
            lefttriangletextpos=m;
            righttriangletextpos=m/3;
        }
        else
        {
            lefttriangletextpos=m+50;
            righttriangletextpos=m/8;
        }
        $('.projectleft').css({
            'position':'relative',
            'top':'-10px',
            'left':'-'+lefttriangletextpos+'px'
        });
        $('.projectright').css({
            'position':'relative',
            'top':'-10px',
            'left':righttriangletextpos+'px'
        });

        $('.projectdetail').hide();
        //$('#projectdisplay').hide();
        /*$('.projectleft, .projectright').hover(function() {
            $(this).find('.projectname').hide();
            $(this).find('.projectdetail').show();
        }, function() {
            $(this).find('.projectname').show();
            $(this).find('.projectdetail').hide();
        });*/
    };
    //scripts for project detail div
    $('.projectleft, .projectright').on('click',function(){
        var verticaloffset=0;
        verticaloffset=parseInt($(this).parent().attr('id').toString().charAt(1))*50;
        console.log(verticaloffset);
       document.getElementById('pdchild').innerHTML=$(this).find('.projectdetail').html();
        $('#projectdispaly').css({
            'height':$(window).height()+'px',
            'width':$(window).width()+'px',
            'position':'absolute',
            'top':($(window).height()+verticaloffset)+'px',
            'right':'0px',
            'display':'block'
        });
        $('#pdvalign').css({
            'height':$(window).height()/3+'px'
        });
        $('.pdback').on('click',function(){
            console.log('0');
            $(this).parent().parent().hide();
        });
        $('#projectdispaly').slideDown(200);
    });
    //end of scripts for project details div
    $(window).resize(function(){
        mystart();
    });
});