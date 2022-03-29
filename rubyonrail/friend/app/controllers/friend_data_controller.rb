class FriendDataController < ApplicationController
  before_action :set_friend_datum, only: %i[ show edit update destroy ]
  before_action :authenticate_user!, except: [:index, :show]

  # GET /friend_data or /friend_data.json
  def index
    @friend_data = FriendDatum.all
  end

  # GET /friend_data/1 or /friend_data/1.json
  def show
  end

  # GET /friend_data/new
  def new
    @friend_datum = FriendDatum.new
  end

  # GET /friend_data/1/edit
  def edit
  end

  # POST /friend_data or /friend_data.json
  def create
    @friend_datum = FriendDatum.new(friend_datum_params)

    respond_to do |format|
      if @friend_datum.save
        format.html { redirect_to @friend_datum, notice: "Friend datum was successfully created." }
        format.json { render :show, status: :created, location: @friend_datum }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @friend_datum.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /friend_data/1 or /friend_data/1.json
  def update
    respond_to do |format|
      if @friend_datum.update(friend_datum_params)
        format.html { redirect_to @friend_datum, notice: "Friend datum was successfully updated." }
        format.json { render :show, status: :ok, location: @friend_datum }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @friend_datum.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /friend_data/1 or /friend_data/1.json
  def destroy
    @friend_datum.destroy
    respond_to do |format|
      format.html { redirect_to friend_data_url, notice: "Friend datum was successfully destroyed." }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_friend_datum
      @friend_datum = FriendDatum.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def friend_datum_params
      params.require(:friend_datum).permit(:firtName, :lastName, :email, :phone, :user_id)
    end
end
