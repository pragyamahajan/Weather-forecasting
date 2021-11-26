function allowDrop(ev) {
    ev.preventDefault();
}
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    console.log(document.getElementById(data).getAttribute("id"));
    if(document.getElementById(data).getAttribute("id") == "drag1"){
        document.querySelector(".verdict").innerHTML = "Lorem ipsum dolor sit amet. Ab facilis quae sit neque fuga a similique galisum! Hic voluptatem sunt hic consequatur tenetur et nemo error ea impedit eos dolorem quidem cum quod nihil. Eum numquam internos At ipsam distinctio ut nisi ullam eum veniam quia sed consequatur dolores et beatae quisquam rem recusandae numquam! Sed similique mollitia ab sint perspiciatis quo velit amet ut tenetur voluptas cum facere aliquam qui suscipit porro. Sit velit veniam et veniam odit vel quod animi aut praesentium iusto est galisum maiores. Id rerum libero ut voluptate Quis sit temporibus rerum non voluptas tenetur. Vel molestiae incidunt non quaerat quis ut laudantium sit quaerat maiores ut odio voluptatem nam ducimus aperiam";
    }
    else if(document.getElementById(data).getAttribute("id") == "drag2"){
        document.querySelector(".verdict").innerHTML = "Lorem ipsum dolor sit amet. Ab facilis quae sit neque fuga a similique galisum! Hic voluptatem sunt hic consequatur tenetur et nemo error ea impedit eos dolorem quidem cum quod nihil. Eum numquam internos At ipsam distinctio ut nisi ullam eum veniam quia sed consequatur dolores et beatae quisquam rem recusandae numquam! Sed similique mollitia ab sint perspiciatis quo velit amet ut tenetur voluptas cum facere aliquam qui suscipit porro. Sit velit veniam et veniam odit vel quod animi aut praesentium iusto est galisum maiores. Id rerum libero ut voluptate Quis sit temporibus rerum non voluptas tenetur. Vel molestiae incidunt non quaerat quis ut laudantium sit quaerat maiores ut odio voluptatem nam ducimus aperiam";
        
    }
    else if(document.getElementById(data).getAttribute("id") == "drag3"){
        document.querySelector(".verdict").innerHTML = "Lorem ipsum dolor sit amet. Ab facilis quae sit neque fuga a similique galisum! Hic voluptatem sunt hic consequatur tenetur et nemo error ea impedit eos dolorem quidem cum quod nihil. Eum numquam internos At ipsam distinctio ut nisi ullam eum veniam quia sed consequatur dolores et beatae quisquam rem recusandae numquam! Sed similique mollitia ab sint perspiciatis quo velit amet ut tenetur voluptas cum facere aliquam qui suscipit porro. Sit velit veniam et veniam odit vel quod animi aut praesentium iusto est galisum maiores. Id rerum libero ut voluptate Quis sit temporibus rerum non voluptas tenetur. Vel molestiae incidunt non quaerat quis ut laudantium sit quaerat maiores ut odio voluptatem nam ducimus aperiam";
        
    }
    else if(document.getElementById(data).getAttribute("id") == "drag4"){
        document.querySelector(".verdict").innerHTML = "Lorem ipsum dolor sit amet. Ab facilis quae sit neque fuga a similique galisum! Hic voluptatem sunt hic consequatur tenetur et nemo error ea impedit eos dolorem quidem cum quod nihil. Eum numquam internos At ipsam distinctio ut nisi ullam eum veniam quia sed consequatur dolores et beatae quisquam rem recusandae numquam! Sed similique mollitia ab sint perspiciatis quo velit amet ut tenetur voluptas cum facere aliquam qui suscipit porro. Sit velit veniam et veniam odit vel quod animi aut praesentium iusto est galisum maiores. Id rerum libero ut voluptate Quis sit temporibus rerum non voluptas tenetur. Vel molestiae incidunt non quaerat quis ut laudantium sit quaerat maiores ut odio voluptatem nam ducimus aperiam";
    }
}