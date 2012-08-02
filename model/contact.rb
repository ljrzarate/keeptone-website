class Contact
attr_accessor :name, :email, :whatsapp_pin, :message


def initialize(name, email, whatsapp_pin, message)

		@name, @email, @whatsapp_pin, @message = name, email, whatsapp_pin, message

end

def valid?
   	errors = []

    
	  
	exp = /\A[\w+\-.]+@[a-z\d\-.]+\.[a-z]+\z/i

	 valid_email = exp.match(@email)

	 unless valid_email
	 	errors.push("Ingrese una direcci&oacute;n de correo v&aacute;lida.")
	 end

	 if @name.strip.length < 3
	 	errors.push("El nombre debe tener al menos 3 caracteres.")

	 end

    if @message.strip.empty?
    	errors.push("Debe escribir un mensaje.")
    end

	 errors

 end
end