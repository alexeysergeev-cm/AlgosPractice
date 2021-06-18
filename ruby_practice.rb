# p [1, 2, 3].all? { |el| el.odd? }
# p [1, 2, 3].any? { |el| el.odd? }
# p [1, 2, 3].none? { |el| el.odd? }


# my_bootcamp = { :name=>"App Academy", :color=>"red", :locations=>["NY", "SF", "ONLINE"] }
# p my_bootcamp           # => {:name=>"App Academy", :color=>"red", :locations=>["NY", "SF", "ONLINE"]}
# p my_bootcamp[:color]   #=> "red
# p my_bootcamp[:locations][-1]   #=> 

# my_bootcamp = { name:"App Academy", color:"red", locations:["NY", "SF", "ONLINE"] }
# p my_bootcamp           # => {:name=>"App Academy", :color=>"red", :locations=>["NY", "SF", "ONLINE"]}
# p my_bootcamp[:color]   #=> "red

# def modify_string(str, options)
#     str.upcase! if options["upper"]
#     p str * options["repeats"]
# end

# # less readable
# # modify_string("bye", {"upper"=>true, "repeats"=>3}) # => "BYEBYEBYE"

# # more readable
# modify_string("bye", "upper"=>false, "repeats"=>3)   # => "BYEBYEBYE"


# def method(arg_1, arg_2, *other_args)
#     p arg_1         # "a"
#     p arg_2         # "b"
#     p other_args    # ["c", "d", "e"]
# end

# # method("a", "b", "c", "d", "e") 
# method("a", "b")

# def greet(first_name, last_name)
#     p "Hey " + first_name + ", your last name is " + last_name
# end

# names = ["Grace", "Hopper"]
# greet(*names)    # => "Hey Grace, your last name is Hopper"


# def func(a)
#   newArr = []
#   a.each do |ele|
#     if ele.is_a? Array
#       newArr.push(*ele)
#     else 
#       newArr.push(ele)
#     end
#   end
#   p newArr
# end
# arr = [['a'], 'b', ['c','d']];
# func(arr)


# p [1,2,3,4,5].inject(15) {|acc, val| acc + val}

# def say_bye
#     message = "bye"

#     3.times do 
#         p message
#     end
# end

# say_bye

# if true
#     drink = "cortado"
# end

# p drink

# def bubbleSort(arr)
#   sorted = false;
#   while !sorted
#     sorted = true

#     (0...arr.length-1).each do |i|
#       if arr[i] > arr[i+1]
#         arr[i], arr[i+1] = arr[i+1], arr[i]
#         sorted = false
#       end
#     end

#   end
#   p arr
# end

# bubbleSort([2,5,1,4,2,6,7,8,4])


# num = 0

# begin
#   puts "dividing 10 by #{num}"
#   ans = 10 / num
#   puts "the answer is #{ans}"
# rescue
#   puts "There was an error with that division."
# end

# puts "--------"
# puts "finished"


# p "hello".instance_of?(String)  # => true
# p 42.instance_of?(Integer)       # => false
# p [42].instance_of?(Array)       # => false

# p 'alex'.upcase!
# p 'alex'.capitalize



def adult_in_group?(arr)
    arr.each do |ele|
        return true if ele[:age] > 18
    end

    false
end

people_1 = [
    {name: "Jack", age: 17},
    {name: "Jill", age: 21},
    {name: "Alice", age: 15},
    {name: "Bob", age: 16}
]
# p adult_in_group?(people_1)    # => true

people_2 = [
    {name: "Jane", age: 12},
    {name: "John", age: 13},
    {name: "Ashley", age: 10},
    {name: "Bill", age: 16}
]
# p adult_in_group?(people_2)    # => false


def only_vowels?(str)
  vowels = ['a', 'e', 'o', 'u','i']
  str.each_char do |c|
    return false if !vowels.include?(c)
      
  end
  true
end
# p only_vowels?("aaoeee")  # => true
# p only_vowels?("iou")     # => true
# p only_vowels?("cat")     # => false
# p only_vowels?("over")    # => false

def filter_lengths(arr, n=5)
  res = []
  arr.each do |el|
    res.push(el) if el.length >= n;
  end
  res 
end


# p filter_lengths(["pear", "dragonfruit", "fig", "clementine"], 4)   # => ["pear", "dragonfruit", "clementine"]
# p filter_lengths(["pear", "dragonfruit", "fig", "clementine"])      # => ["dragonfruit", "clementine"]
# p filter_lengths(["cat", "dog", "capybara", "mouse"], 7)            # => ["capybara"]
# p filter_lengths(["cat", "dog", "capybara", "mouse"])               # => ["capybara", "mouse"]


def max_inject(*args)
  # p args
  args.inject do |acc, val|
    if acc > val
      acc 
    else 
      val
    end 
  end

end

# p max_inject(1, -4, 0, 7, 5)  # => 7
# p max_inject(30, 28, 18)      # => 30


def union(*args)
  args.inject([]) {|acc, val| acc + val}
end

# p union(["a", "b"], [1, 2, 3]) # => ["a", "b", 1, 2, 3]
# p union(["x", "y"], [true, false], [20, 21, 23]) # => ["x", "y", true, false, 20, 21, 23]


def multi_dimensional_sum(arr)
  arr.flatten.sum
end

arr_1 = [
    [4, 3, 1],
    [8, 1],
    [2]
]

# p multi_dimensional_sum(arr_1)    # => 19

arr_2 = [
    [ [3, 6], [7] ],
    [ [5, 2], 1 ]
]

# p multi_dimensional_sum(arr_2)    # => 24
