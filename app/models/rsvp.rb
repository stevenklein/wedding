class Rsvp < ActiveRecord::Base
  has_many :attendees
  accepts_nested_attributes_for :attendees, :reject_if => lambda { |a| a[:attending].blank? }
end
