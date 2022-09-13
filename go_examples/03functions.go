package main

import "fmt"

func main() {
	welcome()
	addition(5, 3)
	result := multiply(4, 10)
	fmt.Println(result)
}

func multiply(i1, i2 int) int {
	return i1 * i2
}

func addition(i1 int, i2 int) {
	fmt.Println(i1 + i2)
}

func welcome() {
	fmt.Println("Welcome to functions in Go Lang")
}
