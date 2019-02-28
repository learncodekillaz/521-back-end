class EventsController < ApplicationController
  before_action :set_event, only: [:show, :edit, :update, :destroy]
  before_action :authenticate_user!
  skip_before_action :verify_authenticity_token

  # GET /events
  # GET /events.json
  def index
    @events = Event.where(inviter_id: current_user).includes(:choices)
    @events.each do | event |
      event.choices.each do | choice |
        p choice.choice_name
      end
    end
  end

  def invited
    @invitations = Event.where(invitee_id: current_user).includes(:choices)
    render  json: @invitations
  end

  # POST /events
  # POST /events.json
  def create
    @event = current_user.inviter_events.new(event_params)
    respond_to do |format|
      if @event.save
        format.json { render :show, status: :created, location: @event }
      else
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /events/1
  # PATCH/PUT /events/1.json
  def update
    # @event = Event.find(params[:id])
    if params[:choices]
      params[:choices].each do |id|
        choice = @event.choices.find id
        choice.promote!
      end
    end
    respond_to do |format|
      if @event.update(event_params)
        format.json { render :show, status: :ok, location: @event }
      else
        format.json { render json: @event.errors, status: :unprocessable_entity }
      end
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_event
      @event = Event.find(params[:id])
    end
    # Never trust parameters from the scary internet, only allow the white list through.
    def event_params
      params.require(:event).permit(:event_name, :invitee_id, :five_choices, :two_choices, :final_choice, :current_stage, :event_attend_inviter, :event_attend_invitee, :event_rating_inviter, :event_rating_invitee, :event_type, :cancel_type, :inviter_id, choices_attributes: [:url, :choice_name, :movie_id, :overview, :status, :id])
    end
end
