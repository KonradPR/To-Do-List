$("document").ready(function(){

    /* button event for showing the div */
    $("#add").click(function(e){
       $("#addMenu").removeClass("invisible");
       $("#addMenu").addClass("visible");
    });

  /* button event for hiding the div*/
    $("#return1").click(function(e){
       $("#addMenu").removeClass("visible");
       $("#addMenu").addClass("invisible");
    });
});
