function Dragger(GLOBAL) {
    "use strict";
    var DOC = GLOBAL.document;

    function stopDrag() {
        DOC.onmousemove = null;
        DOC.onselectstart = null;
    }
   
    function pageOffset() {
        return {
             x : GLOBAL.pageXOffset || DOC.documentElement.scrollLeft || DOC.body.scrollLeft,
             y : GLOBAL.pageYOffset || DOC.documentElement.scrollTop  || DOC.body.scrollTop
        };
    }
  
    function process(element, dx, dy) {
 
      
        DOC.onselectstart = function () {
            return false;
        };
     
        DOC.onmousemove = function (event) {
      
            var e = GLOBAL.event || event;
 
       
            if (GLOBAL.getSelection) {
                GLOBAL.getSelection().removeAllRanges();
            } else if (DOC.selection && DOC.selection.clear) {
                DOC.selection.clear();
            }
       
            element.style.left = e.clientX + pageOffset().x - dx + "px";
            element.style.top  = e.clientY + pageOffset().y - dy + "px";
        };
    }
   
    function dragDrop(elements) {
 
        var length, deltaX, deltaY, i;
        length = elements.length;
 
      
        function startDrag(event) {
       
            var e = GLOBAL.event || event,
                target = e.srcElement || e.target;
 
        
            deltaX = e.clientX + pageOffset().x - target.offsetLeft;
            deltaY = e.clientY + pageOffset().y - target.offsetTop;
          
            process(target, deltaX, deltaY);
        }
      
        for (i = 0; i < length; i += 1) {
         
            elements[i].style.position = "absolute";
            elements[i].onmousedown = startDrag;
        }
    }
 
    DOC.onmouseup = stopDrag;
  
    return {
        makeDragDrop : dragDrop
    };
}
