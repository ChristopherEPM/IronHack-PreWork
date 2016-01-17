# -- EXERCISE FIZZBUZZ--
number =1
while number <=100
	result= ""
	if number %3 !=0 && number %5 !=0 && number.to_s.chars.first != "1"
		result = number
	end
	if number % 3 == 0
		result << "Fizz"
	end 
	if number % 5 == 0 
		result << "Buzz"
	end
	if number.to_s.chars.first == "1"
		result << "Bang"
	end
	puts result
	number =number+1
end
		