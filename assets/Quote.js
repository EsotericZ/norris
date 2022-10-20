Quote = (quote) => {
    return `
    <!DOCTYPE html>
    <html lang="en-US">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Chuck Norris</title>
    </head>
    
    <body>
      <h1>Jokes</h1>
      <p>
      ${quote}
      </p>
      <script src="assets/js/script.js"></script>
    </body>
    
    </html>
    `
}

module.exports = Quote;