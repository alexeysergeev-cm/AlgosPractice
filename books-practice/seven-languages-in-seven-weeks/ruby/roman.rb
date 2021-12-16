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

def get_digits num
  str_num = num.to_s
  digit_count = str_num.length
  digit_count
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

def calculate_single_digit(build_roman, number, hash_map)
  return build_roman += hash_map[number] if hash_map[number]
  if number < 4 
    number.times do |i|
      build_roman += hash_map[1]
    end
  elsif number > 5
    build_roman += hash_map[5]
    range = number - 5 
    range.times do |i|
      build_roman += hash_map[1]
    end
  end
  build_roman
end

def calculate_double_digit(build_roman, number, hash_map)
  range = ((number / 10).to_s + "0").to_i
  left = number % 10
  if number < 50 
    if hash_map[range]
      build_roman += hash_map[range] 
    else 
      (range / 10).times do |i|
        build_roman += hash_map[10]
      end
    end
    build_roman = calculate_single_digit(build_roman, left, hash_map)
  elsif number > 50
    build_roman += hash_map[50]
    range = (number - 50) / 10
    range.times do |i|
      build_roman += hash_map[10]
    end
    build_roman = calculate_single_digit(build_roman, left, hash_map)
  end
  build_roman
end

def calculate_tripple_digit(build_roman, number, hash_map)
  iterator = number / 100
  iterator.times do |i|
    build_roman += hash_map[100]
  end
  left = (number.to_s.slice(1..-1)).to_i
  build_roman = calculate_double_digit(build_roman, left, hash_map)
  build_roman
end

def convert_to_roman(number)
  return '' if number == 0
  hash_map = create_roman_map
  digit_count = get_digits number

  build_roman = "";
  if digit_count == 1
    return hash_map[number] if hash_map[number]
    build_roman = calculate_single_digit(build_roman, number, hash_map)
  elsif digit_count == 2 
    return hash_map[number] if hash_map[number]
    build_roman = calculate_double_digit(build_roman, number, hash_map)
  elsif digit_count == 3
    return hash_map[number] if hash_map[number]
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