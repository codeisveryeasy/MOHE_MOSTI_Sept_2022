count = 0


def welcome():
    global count
    count = count+1
    print("Hello from recursion: " , count)
    #recursive functions must always have a stop conditoin
    welcome()


welcome()