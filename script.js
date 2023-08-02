movable= undefined

function canValue(value){
    movable = value
}

function getMoving(event){
    if(movable){
        var left = event.clientX;
        var top = event.clientY;  
        
        
        object_element = document.getElementById('object')
        object_element.style.left = left -25+'px';
        object_element.style.top = top-25 + 'px';
    }
}