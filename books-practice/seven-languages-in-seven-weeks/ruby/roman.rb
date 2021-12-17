class Roman
  def self.method_missing name, *args
    roman = name.to_s
    roman.gsub!("IV", "IIII")
    roman.gsub!("IX", "VIIII")
    roman.gsub!("XL", "XXXX")
    roman.gsub!("XC", "LXXXX")

    (roman.count("I") + 
      roman.count("V") * 5 + 
      roman.count("X") * 10 + 
      roman.count("L") * 50 + 
      roman.count("C") * 100)
  end
end

# puts Roman.X
# puts Roman.XC
# puts Roman.XII
# puts Roman.IX
# puts Roman.G


# Having input number output the Roman number
# 8 => VIII

def get_digits num
  num.to_s.length
end

def create_roman_map
  hash_map = Hash.new()
  hash_map[1] = "I"
  hash_map[4] = "IV"
  hash_map[5] = "V"
  hash_map[9] = "IX"
  hash_map[10] = "X"
  hash_map[40] = "XL"
  hash_map[50] = "L"
  hash_map[90] = "XC"
  hash_map[100] = "C"
  hash_map
end

def singles(num, map, multiplier)
  str = ""
  num.times do |i|
    str += map[multiplier]
  end
  str
end

def calculate_single_digit(build_roman, number, hash_map)
  return build_roman += hash_map[number] if hash_map[number]
  if number < 4 
    build_roman += singles(number, hash_map, 1)
  elsif number > 5
    build_roman += hash_map[5]
    range = number - 5 
    build_roman += singles(range, hash_map, 1)
  end
  build_roman
end

def calculate_double_digit(build_roman, number, hash_map)
  return build_roman += hash_map[number] if hash_map[number]
  range = number / 10
  left = number % 10
  if number < 50 
    if hash_map[range * 10]
      build_roman += hash_map[range * 10] 
    else 
      build_roman += singles(range, hash_map, 10)
    end
    build_roman = calculate_single_digit(build_roman, left, hash_map)
  elsif number > 50
    build_roman += hash_map[50]
    range = (number - 50) / 10
    build_roman += singles(range, hash_map, 10)
    build_roman = calculate_single_digit(build_roman, left, hash_map)
  end
  build_roman
end

def calculate_tripple_digit(build_roman, number, hash_map)
  return build_roman += hash_map[number] if hash_map[number]
  iterator = number / 100
  left = number % 100
  build_roman += singles(iterator, hash_map, 100)
  build_roman = calculate_double_digit(build_roman, left, hash_map)
  build_roman
end

def convert_to_roman(number)
  return '' if number == 0
  hash_map = create_roman_map
  digit_count = get_digits(number)

  build_roman = "";
  if digit_count == 1
    build_roman = calculate_single_digit(build_roman, number, hash_map)
  elsif digit_count == 2 
    build_roman = calculate_double_digit(build_roman, number, hash_map)
  elsif digit_count == 3
    build_roman = calculate_tripple_digit(build_roman, number, hash_map)
  end

  build_roman
end

puts convert_to_roman(0) #=> ""
puts convert_to_roman(1) #=> I 
puts convert_to_roman(3) #=> III
puts convert_to_roman(4) #=> IV 
puts convert_to_roman(7) #=> VII
puts convert_to_roman(8) #=> VIII
puts convert_to_roman(12) #=> XII
puts convert_to_roman(45) #=> XLV
puts convert_to_roman(55) #=> LV
puts convert_to_roman(77) #=> LXXVII
puts convert_to_roman(100) #=> C
puts convert_to_roman(123) #=> CXXIII
puts convert_to_roman(155) #=> CLV
puts convert_to_roman(327) #=> CCCXXVII
puts convert_to_roman(159) #=> CLIX