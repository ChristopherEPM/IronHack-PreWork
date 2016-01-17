#-- EJERCICIO CIFRADO CESAR--
#require 'pry'
# puts "a".ord
#binding.pry  

#iteracion 3 sin espacios (primera version)
#texto= "p| uhdo qdph lv grqdog gxfn".chars.map { |e|e.ord }
#trad =texto.map { |e| e - 3 }
#puts trad.map { |e| e.chr  }.join


#iteracion 1
#def solve_cipher(texto)
#  puts texto
#  arr_text =texto.chars.map {|item| item.ord}
#  trad = arr_text.map { |item| item - 1 }
#  puts trad.map { |item| item.chr  }.join
#end
#solve_cipher("ifmmp")


#--ITERACION  2
#falta mejorar pues si la codificación shift 
#es mayor a +-26 empezaran a salir caracteres especiales

#def solve_cipher(texto, codec)

#  puts texto
#  arr_text =texto.chars.map { |item| (item !=" " ? item.ord : item)}
#  trad = arr_text.map do |item|
#  	if item !=" " && item >=97  && item + codec < 97 || item !=" " && item >=65 && item <=90 && item + codec < 65
#  		item + 26 + codec
#  	elsif item !=" " && item <=122 && item + codec > 122 || item !=" " && item <=90 && item >=65 && item + codec >90
#  		item - 26 + codec
#  	else 
#  		(item !=" " ? item + codec : item)
#  	end
#  end
#  puts trad.map { |item| (item !=" " ? item.chr : item)  }.join
#  
#end
#solve_cipher("p| uhdo qdph lv grqdog gxfn", -3)


#iteracion 3
def solve_cipher(texto, codec)
  arr_text =texto.chars.map { |item| (item !=" " ? item.ord : item)}
  trad = arr_text.map do |item|
  	if item !=" " && item >=97  && item + codec < 97 || item !=" " && item >=65 && item <=90 && item + codec < 65
  		item + 26 + codec
  	elsif item !=" " && item <=122 && item + codec > 122 || item !=" " && item <=90 && item >=65 && item + codec >90
  		item - 26 + codec
  	else 
  		(item !=" " ? item + codec : item)
  	end
  end
  print "Texto cifrado: "
  puts trad.map { |item| (item !=" " ? item.chr : item)  }.join
end

print "Introduce la frase a la que aplicar el cifrado cesar: "
frase = gets.chomp
solve_cipher(frase, -3)
