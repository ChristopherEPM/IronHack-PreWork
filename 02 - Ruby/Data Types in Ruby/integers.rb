#En ruby los numeros estan divididos en dos tipos integers y floats.
# hay dos clases de integers los Fixnum para numeros pqueños y Bignum para numeros grandes.

age =28
cats = 5
#para numeros largos se pueden separar los miles con barra baja y hacerlos mas facil de leer, ruby ignorara las barras bajas

stars_in_milkyway = 325_006_357_011
puts stars_in_milkyway

#--METODOS

# metodo even or odd (par o impar)
printf "Es #{age} impar? "  
puts age.odd? 
printf "Es #{age} par? " 
puts age.even?

# metodo round (Redondeo)
puts age.round (-1)
puts age.round(1)

# metodo times ejecuta un bloque de codigo un numero de veces
3.times {puts "beetlejuice"}