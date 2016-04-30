curl -X POST "https://graph.facebook.com/v2.6/me/subscribed_apps?access_token=<EAANwiLCZBpfcBAEehq42EbAzlkdFPZCcK7D3uDSWwNc4FDNZCUerQ42PYfsnF8aWMRt4qr4uMCfEsBAAwshz7cPesgxyd1aSoJUuZAjY1Ig2ZA24If74rjnAMn8OU8lkSxEIm70cN0Iu8mspoNPeczGd1rEGZAjoO4FmfRq3cKxAZDZD>"

{
  "success": true
}

{
  "object":"page",
  "entry":[
    {
      "id":968157313279479,
      "time":123456789,
      "messaging":[
        {
          "sender":{
            "id":USER_ID
          },
          "recipient":{
            "id":PAGE_ID
          },

          ...
        }
      ]
    }
  ]
}