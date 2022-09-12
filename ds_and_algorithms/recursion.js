var count = 0


function welcome(){
    count++
    console.log("Hello from recursion: " + count)
    //recursive functions must always have a stop conditoin
    welcome()
}


welcome()


