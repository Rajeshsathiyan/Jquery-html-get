// Get text 
// $(document).ready(function(){
//     $("button").click(function(){
//        alert($("p").text()); 
//     })
// })

// Get text with html tag
// $(document).ready(function(){
// $("#btn1").click(function(){
//     alert($("p").html());
// })
// })

//Get Attribute 
$(document).ready(function(){
    $("#btn3").click(function(){
    alert($("a").attr("href"));
})
})

//Get the val
$(document).ready(function(){
    $("#btn2").click(function(){
        var name = $("#name").val();
        var age = $("#age").val();
        var gender =$("#gender").val();
        alert("Name: " + name + "\nAge: " + age + "\nGender:" + gender);
        // Clear input fields
        $("#name").val("");
        $("#age").val("");
    })
    })