class ApplicationController < ActionController::API
  include DeviseTokenAuth::Concerns::SetUserByToken
  include CanCan::ControllerAdditions

  rescue_from CanCan::AccessDenied do |exception|
	  if user_signed_in?
	    render json: { message: "You don't have permissions." }, status: :forbidden
	  else
	    render json: { message: "You need to be logged in." }, status: :unauthorized
	  end
	end

end
