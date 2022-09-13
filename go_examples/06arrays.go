package main

import "fmt"

func main() {
	//declare array
	//var arrayName = [sizeOfArray]dataType{elements of array}
	var scores = [4]int{88, 71, 53, 91}
	fmt.Println(scores)
	fmt.Println(len(scores))

	var lifes = [12]int{0: 8, 5: 9, 11: 88}
	fmt.Println(lifes)

	//use for range to iterate on arrays
	for index, value := range scores {
		fmt.Println("Index: ", index, "Value: ", value)
	}

	//use for range to iterate on arrays
	for _, value := range scores {
		fmt.Println("Value: ", value)
	}

	//use for range to iterate on arrays
	for index, _ := range scores {
		fmt.Println("Index: ", index)
	}
}
