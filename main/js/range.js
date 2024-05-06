/*----------------------------------
    //------ ADVANCED SEARCH ------//
    -----------------------------------*/
$('.more-search-options-trigger').on('click', function(e) {
    e.preventDefault();
    $('.more-search-options, .more-search-options-trigger').toggleClass('active');
    $('.more-search-options.relative').animate({
        height: 'toggle',
        opacity: 'toggle'
    }, 300);
});



arr=['price','no_of_vehicles','storage_size']

arr.forEach((element,index,arr) => {
$("#"+element+"-range").each(function() {

        var dataMin = $(this).attr('data-min');
        var dataMax = $(this).attr('data-max');
        var valMin = $(this).attr('value-min');
        var valMax = $(this).attr('value-max');
        var dataUnitBefore = $(this).attr('data-unit');
        var dataUnitAfter = $(this).attr('data-unit');
        var type = $(this).attr('type');
        if( type=='after'){
            dataUnitBefore=''  
        }else{
            dataUnitAfter=''
        }
        // valMin=
        // valMax=(valMax)?valMax:dataMax
        
        $(this).append("<input type='text' class='first-slider-value' disabled /><input type='text' class='second-slider-value' disabled/>" +
            "<input type='hidden' id='"+element+"-range-min'  value='"+valMin+"' name='min_"+element+"'/><input value='"+valMax+"' name='max_"+element+"' type='hidden' id='"+element+"-range-max' />"
        );
    
        
        $(this).slider({
    
            range: true,
            min: parseInt(dataMin),
            max: parseInt(dataMax),
            values: [parseInt(valMin), parseInt(valMax)],
    
            slide: function(event, ui) {
               
                $(this).children(".first-slider-value").val(dataUnitBefore + ui.values[0].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+' '+dataUnitAfter);
                $(this).children(".second-slider-value").val(dataUnitBefore + ui.values[1].toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+' '+dataUnitAfter);
                $(this).children("#"+element+"-range-min").val(ui.values[0]);
                $(this).children("#"+element+"-range-max").val(ui.values[1]);
            }
        });

     
    
        $(this).children(".first-slider-value").val(dataUnitBefore + $(this).slider("values", 0).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+' '+dataUnitAfter);
        $(this).children(".second-slider-value").val(dataUnitBefore + $(this).slider("values", 1).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, "$1,")+' '+dataUnitAfter);
        
    
    }); 
});



