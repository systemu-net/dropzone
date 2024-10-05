class Post < ApplicationRecord
  # Multiple images can be attached to a post
  has_many_attached :images
end
