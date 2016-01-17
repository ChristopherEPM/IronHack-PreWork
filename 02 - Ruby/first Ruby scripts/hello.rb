#esto es un comentario

#----SALTOS DE LINEA-----
#cada puts introduce un salto de linea
puts "Hello, World!" 
puts "I"
puts "like"
puts "pie."
#los prints no introducen ningun salto de linea
print "cookies" 
print "are"
print "good" #Esto tambien es un comentario
print "too. \n"


#----VAriables : Las variables deben ir en diminutivo con lineaninferiores en las separaciones
my_variable = 10
my_other_variable = "10"
puts my_variable
puts my_other_variable

operation_result = 12 * 34
puts "Operation result is "
puts operation_result

#-----CADENAS----

a_string = "Esto es una cadena"
another_string = 'Esto tambien es una cadena'
cadena_multilinea = """
A long time ago in a galaxy far, far away...

It is a period of civil war. Rebel
spaceships, striking from a hidden
base, have won their first victory
against the evil Galactic Empire.
"""
# LA diferencia entre usar comillas dobles "" o simples'' es que
# con las dobles se pueden utilizar sentencias de escape como \ (por ejemplo \n)
# en las simples se interpretaria como textos 

puts "Hello\nWorld"
puts 'Hello\n world'

#--INTERPOLACION DE CADENAS---

#para usar variables dentro de una cadena debemos usar el doble entrecomillado e interpolarlo.
name ="Chris"
puts "Hi #{name}"

#--INTRODUCCIÓN DE VALORES POR TECLADO----
#para introducir variables por teclado se realiza con "gets.chomp", 
#si lo que queremos  es transformarlo en numero se añade la llamada .to_i (en este caso un integuer) ->"gets.chomp.to_i"

puts "¿Cual es tu nombre?"
name = gets.chomp
puts "Hola, #{name}."
#opcion con numero entero
puts "Dame un numero"
first_number = gets.chomp.to_i
puts "Dame otro número"
second_number = gets.chomp.to_i
puts "#{first_number} x #{second_number} = #{first_number * second_number}"

#---LECTURA Y ESCRITURA DE FICHEROS
file_contents = IO.read ("name.txt")
puts "El contenido del fichero es: #{file_contents}"

puts "Que Escribo en el fichero"
name = gets.chomp
IO.write('name.txt',name)
