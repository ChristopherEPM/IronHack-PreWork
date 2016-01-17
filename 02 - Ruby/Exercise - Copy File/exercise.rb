puts "What is the source file?/Cual es el fichero origen?"
source_file = gets.chomp
source_file_contents = IO.read(source_file)
puts "what is the destination file?/Cual es el fichero destino?"
destination_file = gets.chomp
IO.write(destination_file,source_file_contents)