package main

import (
	"fmt"
	"os"
	"time"
)

func main() {
	fmt.Println(time.Now())
	current := time.Now()
	fmt.Println(current.Hour())
	fmt.Println(current.Minute())
	fmt.Println(current.Second())

	value, check := os.LookupEnv("GOPATH")
	if check {
		fmt.Println("GOPATH:", value)
	} else {
		fmt.Println("GOPATH:", "Not set....")
	}

}
