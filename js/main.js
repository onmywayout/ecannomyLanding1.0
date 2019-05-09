/**
		 * Enviar formulario de contacto y mostrar respuesta
		 */
		function enviarForm()
		{

            var telefono = document.getElementById("telefono").value,
            nombre = document.getElementById("nombre").value,
            email = document.getElementById("email").value,
			empresa = document.getElementById("empresa").value;
			tipoNegocio = document.getElementById("tipoNegocio").value;
            // console.log(nombre);
            // console.log(email);
            // console.log(telefono);
            // console.log(empresa);
            
            if (!email) //la función se llama sola al cargar la página con campos vacios
            return;
            
            
            
            
            $.ajax({
		            type: "POST",
		            url: 'https://o6ur6ye60l.execute-api.us-east-1.amazonaws.com/prod/processContactFormRequest',
		            contentType: 'application/json',
		            data: JSON.stringify({
		                'nombre': nombre,
		                'telefono': telefono,
		                'email': email,
						'empresa': empresa,
						"tipoNegocio": tipoNegocio
		            }),
		            success: function(res)
		            {
		                alert("Sus datos han sido enviados correctamente");
		            },
		            error: function(res)
		            {
		                alert("Lo lamentamos mucho. Ha ocurrido un error");
		                console.log(res);
		            }
		        });
		        return;


		}

		/**
		 * Vuelve a habilitar el form para que se pueda enviar otro mensaje despues del primero
		 */
		function mostrarForm()
		{
		    $("#formulario").removeClass("ocultar");
		    $("#respuesta").addClass("ocultar");
		    return;
		}