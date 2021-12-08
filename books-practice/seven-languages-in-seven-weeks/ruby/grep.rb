class Grep
  def read_and_find(exp)
    File.readlines('object_70332723636240.txt').each do |line|
      if line.match(/#{exp}/) 
        p line.chomp
      end
    end
  end
end

Grep.new().read_and_find("Tree")
Grep.new().read_and_find("tree")
Grep.new().read_and_find("make")