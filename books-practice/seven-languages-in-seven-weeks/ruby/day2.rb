p [].class

#--- 

def tell(options={})
  if options.empty? 
    p 'ugh'
    return
  end
  if options[:drink] == :beer
    p 'Please serve this man a beer'
  else 
    p "Serve him a #{options[:drink]}"
  end
end

tell
tell(:drink => :soda)
tell(:drink => :beer)

#----

class Fixnum
  def my_times
    i = self
    while i > 0
      i = i - 1
      yield
    end
  end
end
3.my_times {puts 'magoose'}


#----

def call_block(&block)
  block.call
end

def pass_block(&block)
  call_block(&block)
end

pass_block {puts 'Hello, block'}

# execute_at_noon {puts 'Beep Beep'}

# in_case_of_emergency do 
#   use_credit_card
#   panic
# end

# def in_case_of_emergency
#   yield if emergency?
# end



p 4.class.superclass.superclass.superclass.superclass
p 4.class.class.superclass