class FrontFacingController < ActionController::Base
  layout 'application'
  def index
    @rsvp = Rsvp.new
    @rsvp.attendees.build
  end

  def admin
    @rsvps = Rsvp.all
    redirect_to root_path unless signed_in?
  end
end
