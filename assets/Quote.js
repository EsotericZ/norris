Quote = (quote) => {
    return `
    <!DOCTYPE html>
    <html lang="en-US">
    
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Chuck Norris</title>
      <link rel="stylesheet" href="/css/style.css" />
    </head>
    
    <body>
      <div>
        <img src="/images/chuck.png" alt="chuck">
        <p>
          ${quote}
        </p>
        <button type="button" id="moreBtn">Give Me More</button>
      </div>
      <script src="/js/script.js"></script>
    </body>
    
    </html>
    `
}

module.exports = Quote;