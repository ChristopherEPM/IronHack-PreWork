# ----FUNCIONES------

# se establece con def  y end. Se le puede (o no) pasar argumentos.

def taste (food)
	if food == "bacoon"
		puts "Yummy!! BACON!!!"
	elsif food == "spinach"
		puts "Urgh..."
	else
		puts "Can I have some bacon on this side"
	end
end

taste "spinach"
taste "eggs"
taste "bacoon"