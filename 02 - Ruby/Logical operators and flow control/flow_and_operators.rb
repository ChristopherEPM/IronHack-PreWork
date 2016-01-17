#----IF, ELSE  & ELSEIF----
puts "cual es tu animal favorito?"
animal = gets.chomp
if animal == "perro" || animal == "dog" || animal == "Perro"
	puts "Te gustan los perros. Woof!"
elsif animal == "Cat" || animal =="gato" || animal == "Gato"
	puts "Te gustan los gatos. Meow!"
else  #el ultimo else es opcional, se ejecutara si ninguno d elos anteriores lo hace
	puts "No te gustan los gatos ni los perros? Okay" 
end

#---LOOPS- FOR , WHILE & EACH
numbers = [1,2,3]
for element in numbers #element is a variable that we are setting to refer to each of the items in the array numbers. You can name the variable however like.
		puts "-> #{element}"
end

# la sentencia while funcionara mientras la condicion sea evaluada a true,
# una vez pase a ser false, parará

string = ""
while string.length < 10
	string = string + 'a'
end
puts " The final string is #{string}"

#loop a traves de un array y hacer algo con cada uno de los objetos con #each
numbers = ["one", 2, "three"]
numbers.each do |item| #con item nos referimos a cada item del array, se puede llamar como queramos
	puts "--> #{item}"
end

# se puede hacer lo mismo con un hash solo que en ese caso se trabajara con las dos variables de key y value

my_hash ={}
my_hash["AST"] = "Asturias"
my_hash["GAL"] = "Galicia"
my_hash["CAT"] = "Catalunya"

my_hash.each do |key,value|
	puts "#{key} es para #{value}"
end