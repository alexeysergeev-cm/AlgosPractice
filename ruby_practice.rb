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

if true
    drink = "cortado"
end

p drink