  
   
        // 1. Control de Menú Móvil Adaptativo
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navMenuList = document.getElementById('nav-menu-list');

        mobileMenuBtn.addEventListener('click', () => {
            mobileMenuBtn.classList.toggle('active');
            navMenuList.classList.toggle('active');
        });

        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenuBtn.classList.remove('active');
                navMenuList.classList.remove('active');
            });
        });

        // 2. Control del Chat Flotante
        const openChatBtn = document.getElementById('open-chat-btn');
        const closeChatBtn = document.getElementById('close-chat-btn');
        const chatWindow = document.getElementById('chat-window');
        const chatInputField = document.getElementById('chat-input-field');
        const chatMessagesContainer = document.getElementById('chat-messages-container');

        openChatBtn.addEventListener('click', () => {
            chatWindow.classList.toggle('active');
            if (chatWindow.classList.contains('active')) {
                chatInputField.focus();
            }
        });

        closeChatBtn.addEventListener('click', () => {
            chatWindow.classList.remove('active');
        });

        // Respuestas Dinámicas Inteligentes
        function sendChatMessage() {
            const text = chatInputField.value.trim();
            if (text === '') return;

            appendMessage(text, 'outgoing');
            chatInputField.value = '';

            setTimeout(() => {
                let reply = "Entendido. Para darte una cotización exacta o confirmar la disponibilidad de inmediato, te sugiero escribirme a mi WhatsApp al 58030232.";
                const lowerText = text.toLowerCase();

                if (lowerText.includes('remesa') || lowerText.includes('tasa') || lowerText.includes('dinero') || lowerText.includes('cambio') || lowerText.includes('dolar') || lowerText.includes('enviar')) {
                    reply = "¡Excelente! Realizamos entregas transparentes con máxima rapidez. El cambio se calcula según la tasa vigente del día. ¿Cuánto deseas enviar?";
                } else if (lowerText.includes('taxi') || lowerText.includes('viaje') || lowerText.includes('aeropuerto') || lowerText.includes('carro') || lowerText.includes('auto') || lowerText.includes('hospital')) {
                    reply = "Con gusto, te garantizamos un viaje puntual en nuestro auto clásico. ¿Me podrías indicar la fecha, origen y destino de tu viaje?";
                } else if (lowerText.includes('hola') || lowerText.includes('buenos') || lowerText.includes('buenas') || lowerText.includes('saludos')) {
                    reply = "¡Hola! Un placer conectar contigo. ¿En qué servicio estás interesado hoy? Ofrecemos taxis de absoluta confianza y entrega veloz de remesas.";
                }

                appendMessage(reply, 'incoming');
            }, 1000);
        }

        function appendMessage(text, type) {
            const msgDiv = document.createElement('div');
            msgDiv.classList.add('message', type);
            msgDiv.innerText = text;
            chatMessagesContainer.appendChild(msgDiv);
            chatMessagesContainer.scrollTop = chatMessagesContainer.scrollHeight;
        }

        // 3. Formulario Directo que se envía por WhatsApp
        function submitForm() {
            const name = document.getElementById('form-name').value;
            const msg = document.getElementById('form-msg').value;
            
            const encodedText = encodeURIComponent(`Hola Rody, soy ${name}. Me pongo en contacto contigo a través de la web para lo siguiente: ${msg}`);
            const whatsappUrl = `https://wa.me/5358030232?text=${encodedText}`;
            
            window.open(whatsappUrl, '_blank');
        }
    