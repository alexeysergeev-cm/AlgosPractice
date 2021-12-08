module ToFile
  def filename
    "object_#{self.object_id}.txt"
  end

  def to_f
    File.open(filename, 'w') {|f| f.write(to_s, bio)}
  end
end

class Person
  include ToFile
  attr_accessor :name, :about

  def initialize(name, about)
    @name = name
    @about = about
  end

  def to_s
    name
  end

  def bio
    about
  end
end

about = "\nHey, lets make it to the start. These are the things I am interested:\n 1)X\n 2)B\n 3)C"
Person.new('matz', about).to_f