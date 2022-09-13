package main

import "fmt"

func main() {
	fmt.Println("Datatypes")
	//declare a variable in go
	//var variableName datatype
	var score int
	var cityName string
	var check bool
	var lifeline float32
	score = 88
	cityName = "KL"
	check = true
	lifeline = 88.88

	fmt.Println(score)
	fmt.Println(cityName)
	fmt.Println(check)

	fmt.Println("Score:", score)
	fmt.Println("City name:", cityName)
	fmt.Println("Check:", check)
	fmt.Println("Lifeline:", lifeline)
}
