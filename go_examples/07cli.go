package main

import (
	"fmt"
	"os"
	"strconv"
)

func main() {
	fmt.Println(os.Args)
	sum := 0
	for _, v := range os.Args[1:] {
		value, _ := strconv.Atoi(v)
		sum = sum + value
	}
	fmt.Println("Sum: ", sum)
}
