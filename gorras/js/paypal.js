paypal.Buttons({
    style: {
      shape: 'rect',
      color: 'gold',
      layout: 'vertical',
      label: 'paypal',
    },
    createOrder: function(data, actions) {
      return actions.order.create({
        purchase_units: [{"amount":{"currency_code": "USD", "value": 2.99}}]
      });
    },
    onApprove: function(data, actions) {
      return actions.order.capture().then(function(orderData) {
                      // Full available details
        console.log('Capture result', orderData, JSON.stringify(orderData, null, 2));
                      // Show a success message within this page, for example:
        const element = document.getElementById('paypal-button-container');
        element.innerHTML = '';
        element.innerHTML = '<h3>¡Gracias por tu pago!</h3>';
                      // O ir a otra URL:  actions.redirect('thank_you.html');
      });
    },
    onError: function(err) {
      console.log(err);
    }
  }).render('#paypal-button-container');