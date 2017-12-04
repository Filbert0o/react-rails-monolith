class Api::CerealsController < ApiController

  def index
    render json: { cereals: Cereal.all }
  end

  def show
    render json: { cereal: Cereal.find(params[:id]) }
  end

end
