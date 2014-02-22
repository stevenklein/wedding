class RsvpsController < ApplicationController

  def create
    @rsvp = Rsvp.new(rsvp_params)
    if @rsvp.save
      flash[:notice] = "Successfully created Rsvp."
      redirect_to root_path
    else
      render :action => 'front_facing#index'
    end
  end

  private

    def rsvp_params
      params.require(:rsvp).permit(attendees_attributes: [:first_name, :last_name, :attending])
    end
end
