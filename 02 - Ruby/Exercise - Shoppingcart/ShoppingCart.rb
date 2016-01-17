#-----EJERCICIO CARRITO DE LA COMPRA
class ShoppingCart
	def initialize
    	@items = []
    	@total_cart_items = 0
    	@total_cart_price = 0
	end

	def add_item(item,cantidad,precio) #Add your item to @items
    	@items.push(item)
    	@total_cart_items += cantidad
    	@total_cart_price += precio
	end

	def cart_price
  		if @total_cart_items > 5
  			@total_cart_price = @total_cart_price - (@total_cart_price * 0.1)
  			puts "Special storewide discount!!! You have more than 5 items in your cart, so you got a 10% off in the price "
  		end
  	end

	def print_total_cart_price
  		puts "Sr./Lady, Your total cart price is : #{@total_cart_price}€"
  	end

	def print_total_cart_items
  		puts "Your total items amount in cart is : #{@total_cart_items}"
  	end

end

class Item 
	def initialize(name, price, unit)
    	@name = name
    	@price = price
    	@unit = unit
    	@total_price = price * unit	
 	end

	def price
    	puts "#{@name} - This item, dont have a discount, sorry"
	end

	def print_total_price_item
		puts "#{@name} - The total items price amount is : #{@total_price}€"
	end

	def get_total_price
		return @total_price
	end

	def get_unit
		return @unit
	end
end

class Houseware < Item
	def price
    	if @price > 100
    		@total_price = @total_price - ( @total_price * 0.05)
    		puts "#{@name} - All HouseWare´s items greaters than 100€ have a 5% off"
    	else
    		puts "#{@name} - This HoseWare item isnt greater than 100€ so you dont have discount, sorry"
		end
	end
end

class Fruit < Item
	@@time = Time.new #variable de clase
  	def price
	  	if @@time.wday == 0 ||  @@time == 6
	  		@total_price = @total_price - (@total_price * 0.1)
	  		puts "#{@name} - You have a 10% discount"
	  	else
	  		puts "#{@name} - Sorry these items only have discount in weekends"
	  	end
	end
end
joshs_cart = ShoppingCart.new
puts "---------FRUITS----------"
platano = Fruit.new("Bananas",10,1)
platano.print_total_price_item
platano.price 
platano.print_total_price_item
puts "--------HOUSEWARES-------"
aspiradora = Houseware.new("Vacuum cleaner",150,1)
aspiradora.print_total_price_item
aspiradora.price 
aspiradora.print_total_price_item
puts "------ANOTHER ITEMS--------"
zumo = Item.new("Orange Juice",10,3)
zumo.print_total_price_item
zumo.price 
arroz = Item.new("Rice",1,4)
arroz.print_total_price_item
arroz.price 
anchoas = Item.new("Anchovies",3,2)
anchoas.print_total_price_item
anchoas.price
puts "------------------------"
joshs_cart.add_item(platano,platano.get_unit,platano.get_total_price)
joshs_cart.add_item(aspiradora,aspiradora.get_unit,aspiradora.get_total_price)
joshs_cart.add_item(zumo,zumo.get_unit,zumo.get_total_price)
joshs_cart.add_item(arroz,arroz.get_unit,arroz.get_total_price)
joshs_cart.add_item(anchoas,anchoas.get_unit,anchoas.get_total_price)
joshs_cart.print_total_cart_items
joshs_cart.print_total_cart_price
joshs_cart.cart_price
joshs_cart.print_total_cart_price