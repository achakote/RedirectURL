'use strict';
exports.handler = (event, context, callback) => {

  var raw_json=JSON.stringify(event);
  var searchMask = '"host"';
  var regEx = new RegExp(searchMask, "ig");  
  var replaceMask = '"Host"';
  raw_json = raw_json.replace(regEx, replaceMask);
  event=JSON.parse(raw_json);
  
 const request = event.Records[0].cf.request;

  var str=request.headers.Host[0].value;
  var updated_host = request.headers.Host[0].value;
  if (str.startsWith("www")){
    updated_host = str.replace("www.","");
 }
 var location = "https://" + updated_host + request.uri;
  const response = {
    status: '302',
    statusDescription: '302 Found',
    headers: {
            location: [{
                key: 'Location',
                value: location,
            }],
        }
   };
   console.log(response);
   callback(null, response);
};
