#--STRINGS---
# en el primer string se corta despues de sharon

escaped_string = escaped_string = 'This is Sharon\'s escaped string'
puts escaped_string

#--METODOS---
#usaremos un . con el elemento al que queremos aplicar  el metodo

# metodo capitaliza
name ="mr. Bond"
capitalized_name = name.capitalize
puts "HEllo #{capitalized_name}"

# metodo SPLIT
sabores = "chocolate, mint, cereza, vainilla , caramelo, chili"
sabores_array =sabores.split(", ")
puts sabores_array

# metodo lenght 
puts "cuantos caracteres hay en este string".length

puts "awesome".include? "you"
puts "awesome".include? "me"
frase = "Dabale arroz a la zorra el abad"
puts frase.include? "zorra"