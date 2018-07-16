// Determines whether key pressed is enter
$("#inputBox").on('keypress', function(evt){
    var cmd = $(this).val();
    if(evt.which == 13 && cmd){
        register(cmd);
    }
})

// Appends command to history, clears input box
function register(cmd){
    if(cmd){
        var dom = '<div class="cmd">user@terminal:~$ ' + cmd + '</div>';
        $(".registered").append(dom);
        process(cmd);
        $("#inputBox").val('');
    }
}

//Parses and processes most recent command to determine output
function process(cmd){
    if (cmd == "clear"){
        clear();
    }
    if (cmd == "about"){
        about();
    }
    if (cmd.indexOf("theme") != -1){
        theme(cmd);
    }
}

// Clears terminal screen
function clear(){
    $(".registered").empty();
}

// Displays "about" information
function about(){
    $(".registered").append(
        "I'm Nate, an 18-year-old Computer Science major at Dalton State College. In school, I'm learning Java, which is a great language for learning more complex data structures and general best practices, as it is a very standard language. Outside of school, the language I'm most focused on is JavaScript. JavaScript is unique due to its modularity. Depending on the frameworks, libraries, and such that you use, JavaScript can be a single language capable of almost anything. I'm familiar with Angular 5, and now I'm moving onto React for frontend, Node and Express on backend, and I tend to tinker with Brain.JS to learn about neural nets and artificial intelligence. I'm also a big believer in encryption and blockchain, as I believe blockchain is the solution to many problems the world currently faces regarding monetized content, privacy, security, and freedom of speech. I'm also very much a fan of Linux, as I've been using Debian-based distributions of it as long as I can remember. Aside from technology, I play clarinet, trombone, and guitar. Music has been a huge part of my life from middle school onward, and has shaped me into the person I am. I was in marching band all four years of high school, and from that I've gained a powerful sense of comradery and teamwork. Music is a lot like software engineering in quite a few ways. Intricate, specialized parts of the music must interact with other parts perfectly, and at just the right time. This applies to all types of engineering. There's a creativity in engineering that is often overlooked, and I think being a musician has helped me to see that more clearly. Engineering fields, in my opinion, are better described as logic-based creativity than as applied mathematics."
    );
}

// Theme Selector
function theme(cmd){
    if (cmd.indexOf("light") != -1){
        $("*").css("color", "black");
        $("*").css("background-color", "#aeaeae");
    }
    if (cmd.indexOf("dark") != -1){
        $("*").css("color", "white");
        $("*").css("background-color", "#061218");
    }
    if (cmd.indexOf("white") != -1){
        $("*").css("color", "black");
        $("*").css("background-color", "white");
    }
    if (cmd.indexOf("black") != -1){
        $("*").css("color", "white");
        $("*").css("background-color", "black");
    }
}