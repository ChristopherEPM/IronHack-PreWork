# -- EXERCISE FIZZBUZZ--
word=""
number =1
while number <=100
	if number % 3 == 0 && number % 5  == 0
		word="FizzBuzz"
		if number.to_s.chars.first == "1"
			word << "Bang"
		end 
		puts word
	elsif number % 3 == 0
		word = "Fizz"
		if number.to_s.chars.first == "1"
			word << "Bang"
		end 
		puts word
	elsif number % 5 == 0 
		word= "Buzz"
		if number.to_s.chars.first == "1"
			word << "Bang"
		end 
		puts word
	elsif number.to_s.chars.first == "1" 
		puts "Bang"
	else
		puts number	
	end
	number=number+1
end