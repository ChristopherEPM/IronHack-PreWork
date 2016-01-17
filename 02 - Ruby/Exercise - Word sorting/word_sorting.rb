# EXERCISE Word Sorting
def orden(arr)
	order_arr = arr.sort {|a,b| a.upcase <=> b.upcase}
	return order_arr
end
puts "Escribe una frase"
frase = gets.chomp
array_frase = frase.split(/\W+/)
puts "Array sin ordenar: "
puts array_frase
puts "Array ordenado: "
puts orden(array_frase) 



