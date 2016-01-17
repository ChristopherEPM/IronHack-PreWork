# --- EXERCISE SHAKE SHACK --------
class ShakeShope
	def initialize
		@carta_milkshakes = []
	end
	def add_milkshakes(milkshake)
		@carta_milkshakes.push(milkshake)
	end
	def show_milkshakes_list
		@carta_milkshakes.each do |milkshake|
			puts "#{milkshake.milkshake_name} - #{milkshake.get_price_of_milkshake}"
		end
	end
end

class MilkShake
	attr_reader :milkshake_name 
  def initialize (nombre)
	@milkshake_name = nombre
	@base_price = 3
	@total_price = 0
	@ingredients = []
  end
  def add_ingredient(ingredient)
  	@ingredients.push(ingredient)
  end
  def get_price_of_milkshake
  	@total_price= @base_price
  	@ingredients.each do |ingredient|
  	@total_price += ingredient.price
  	end
   	@total_price
  end
end
class Ingredient
	attr_reader :name, :price 
  def initialize(name, price)
    @name = name
    @price = price
  end
end


banana = Ingredient.new("Banana", 2)
chocolate_chips = Ingredient.new("Chocolate Chips", 1)
mint = Ingredient.new("Mint",1)
cookies = Ingredient.new("Cookies",2)
vainilla = Ingredient.new("Vainilla",2)
crunch = Ingredient.new("Crunchs",3)

nizars_milkshake = MilkShake.new("nizars")
nizars_milkshake.add_ingredient(banana)
nizars_milkshake.add_ingredient(chocolate_chips)
nizars_milkshake.add_ingredient(mint)

chris_milkshake = MilkShake.new("chris") 
chris_milkshake.add_ingredient(vainilla)
chris_milkshake.add_ingredient(cookies)
chris_milkshake.add_ingredient(crunch)
#esto imprime bien los precios
#puts nizars_milkshake.get_price_of_milkshake
#puts chris_milkshake.get_price_of_milkshake

josh_shop = ShakeShope.new
josh_shop.add_milkshakes(nizars_milkshake)
josh_shop.add_milkshakes(chris_milkshake)

#La siguiente linea imprime los nombres de los batidos
josh_shop.show_milkshakes_list
