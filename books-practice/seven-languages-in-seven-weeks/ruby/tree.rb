require 'byebug'
class Tree
  attr_accessor :children, :node_name

  def initialize(name, children=[])
    @children = children
    @node_name = name
  end

  def visit_all(&block)
    visit &block
    children.each {|c| c.visit_all &block}
  end

  def visit(&block)
    block.call self
  end
end

ruby_tree = Tree.new("Ruby", [Tree.new("Reia"), Tree.new("Mac")])

puts 'Visiting a node'
ruby_tree.visit {|node| puts node.node_name}
puts

puts 'Visiting all nodes'
ruby_tree.visit_all {|node| puts node.node_name}

puts
puts "Tree2 ---"
puts 

class Tree2
  attr_accessor :family

  def initialize(family)
    @family = family
  end

  def build_tree(node)
    # modify tree 1 class and use that
  end

  def visit_all(&block)
    visit &block
    family.each do |k,val| 
      val.each do |k2,val2|
        hash = {}
        hash[k2] = val2
        Tree2.new(hash).visit_all &block
      end
    end
  end

  def visit(&block)
    block.call family
  end
end

ruby_tree2 = Tree2.new({'grandpa' => {'dad' => {'child1' => {}, 'child 2' => {}}, 'uncle' => {'child 3' => {}, 'child 4' => {}}}})

puts 'Visiting a node'

ruby_tree2.visit do |node| 
  puts node.keys.first
end

puts 'Visiting all nodes'
ruby_tree2.visit_all do |node| 
  puts node.keys.first if node.keys && node.keys.length
end