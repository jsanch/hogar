class LeadsController < ApplicationController

  def send_thank_lead
    email = params[:email]
    LeadMailer.thank_lead(email).deliver
    redirect_to(root_path)
  end

end
