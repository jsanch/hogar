class LeadMailer < ActionMailer::Base
  default from: "ubiqua@ubiqua.me"

  def thank_lead(email)
    mail(to: email, subject: "test")
  end
end
