# ARRAYS

animales = [ "Leones", "Tigres", "Osos"]
puts animales

#podemos guardar distintos tipos de valores

numeros = ["Uno", "2", "tres"]
puts numeros

#acceso a los indices de array
puts numeros[1]
puts numeros[2]
puts numeros[0]

#podemos modificar o mutar nuestros arrays mediante la adición y eliminación de elementos. 
#Para añadir elementos que podemos utilizar el operador << o función push. Para eliminar elementos que podemos, utilizar la función delete_at.

my_array = []
my_array << "A"
my_array.push "B"
my_array.push "C"
puts my_array

my_array.delete_at 2
puts my_array

# metodo sort

numeros =[3,7,1,2,9,21,5]
puts numeros
puts numeros.sort
letras = ["z", "e", "a", "t", "O"]
puts letras
puts letras.sort

#meter los objetos de un array en un string (inversa de split)
sabores = ["chocolate", "menta", "vainilla", "caramelo"]
puts sabores 
puts sabores.join(", ")

# HASHES
# un hash es un array asociativo donde cada elemento tiene un orden o numero asociado a ellos. 
# Los elemetos del has tienen un nombre asociado a ellos
my_hash = {}
my_hash["AST"] = "Asturias"
my_hash["GAL"] = "Galicia"
puts my_hash["AST"]
puts my_hash["GAL"]
puts my_hash

# para comporbar si el hash tiene key, se usa #has_key? , para comprobar si tiene valor #has_value?
puts my_hash.has_key?("AST")
puts my_hash.has_key?("CAT")
puts my_hash.has_value?("Galicia")

# select . se le pasa un bloque de código con ciertas condiciones, y se volverá un nuevo hash con los pares clave-valor desde el hash original que pasan a la condición (s) en el bloque.
puts my_hash.select { |key, value| key.include?("G") }

#-- TRUCOS 
 #si no se sabe que tipo de daros es una variable se puede  saber usando el metodo class en el
puts "what is this?".class
puts 3.class
puts [1,2,3].class