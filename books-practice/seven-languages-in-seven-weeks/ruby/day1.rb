p "Hello world"

str = "Hello, Ruby"
p str.index("Ruby")

(0..9).each {|n| puts "Alexey"}

(1..10).each {|i| p "This is sentence number #{i}"}

# -------
# Pick a number

random_number = rand(10)
attempt = 3

your_guess = gets().chomp().to_i
# p your_guess.chomp().to_i
while random_number != your_guess && attempt > 1
  p random_number > your_guess ? 'Too low' : 'Too high'
  attempt -= 1
  your_guess = gets().chomp().to_i
end

p random_number == your_guess ? 'You won' : 'You lose'



