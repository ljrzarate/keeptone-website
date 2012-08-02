require 'rubygems'
require 'sinatra'
require './model/contact'
#require './models/user'


get '/' do
	erb :index
end

get '/quienes_somos' do
	erb :quienes_somos
end

get '/que_hacemos' do
	erb :que_hacemos
end

get '/contact' do
	erb :contact
end


post '/contact' do
@contact = Contact.new params[:contactname], params[:email], params[:whatsapp], params[:message]

val = @contact.valid?

if val.size == 0
@name = params[:contactname]
erb :contact
else

@errors = val
erb :contact	
end
end



get '/blog_single' do
	erb :blog_single
end


helpers do
def partial menuprincipal
erb menuprincipal, :layout => false
end
end 